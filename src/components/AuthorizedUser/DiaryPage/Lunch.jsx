import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import symbol from '../../../assets/Welcome/symbol.svg';
import LunchImage from '../../../assets/Diary/Lunch.png';
import {
  fetchFoodIntake,
  postFoodIntake,
} from '../../../redux/diary/operations';
import {
  DeviceFlex,
  TitelSection,
  IconMeal,
  TitelMeal,
  TitelNutrients,
  NutrientsSection,
  ButtonRecord,
  TitelRecord,
  ModalRecord,
  Section,
  InputFlex,
  InputMeal,
  ButtonDelete,
  ButtonAdd,
  SVG,
  ButtonFlex,
  ButtonSolution,
  FormStyle,
  NumericalValue,
  ItemMeal,
} from './DiaryPage.styled.jsx';

const Lunch = () => {
  const dispatch = useDispatch();
  const foodIntake = useSelector((state) => state.diary.foodIntake);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    mealName: '',
    carbohydrate: '',
    protein: '',
    fat: '',
  });

  useEffect(() => {
    dispatch(fetchFoodIntake());
  }, [dispatch]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setInputValues({
      mealName: '',
      carbohydrate: '',
      protein: '',
      fat: '',
    });
  };

  const [totalNutrients, setTotalNutrients] = useState({
    carbohydrate: 0,
    protein: 0,
    fat: 0,
  });

  const MealForm = () => {
    // const [setShowNewForm] = useState(false);

    const handleMainFormSubmit = async () => {
      try {
        const calculatedCalories =
          parseFloat(inputValues.carbohydrate) * 4 +
          parseFloat(inputValues.protein) * 3.88 +
          parseFloat(inputValues.fat) * 9;

        const data = {
          foodName: inputValues.mealName,
          carbohydrate: inputValues.carbohydrate,
          protein: inputValues.protein,
          fat: inputValues.fat,
          calories: calculatedCalories.toFixed(2),
          foodType: 'Lunch',
        };

        await dispatch(postFoodIntake(data));

        closeModal();

        // Оновити totalNutrients після успішного виклику
        setTotalNutrients((prev) => ({
          carbohydrate:
            prev.carbohydrate + parseFloat(inputValues.carbohydrate),
          protein: prev.protein + parseFloat(inputValues.protein),
          fat: prev.fat + parseFloat(inputValues.fat),
        }));
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

    // const handleAddMore = () => {
    //   handleMainFormSubmit();
    //   setShowNewForm(true);
    // };

    const handleAddMore = () => {
      handleMainFormSubmit();
      setInputValues({
        mealName: '',
        carbohydrate: '',
        protein: '',
        fat: '',
      });
    };

    return (
      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          handleMainFormSubmit();
        }}
      >
        <InputFlex>
          <InputMeal
            type="text"
            id="mealName"
            value={inputValues.mealName}
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, mealName: e.target.value }))
            }
            required
            placeholder="The name of the product or dish"
            size="35"
          />

          <InputMeal
            type="text"
            id="carbonohidrates"
            value={inputValues.carbohydrate}
            placeholder="Carbonohidrates"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                carbohydrate: e.target.value,
              }))
            }
            required
            size="35"
          />

          <InputMeal
            type="text"
            id="protein"
            value={inputValues.protein}
            placeholder="Protein"
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, protein: e.target.value }))
            }
            required
            size="8"
          />

          <InputMeal
            type="text"
            id="fat"
            value={inputValues.fat}
            placeholder="Fat"
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, fat: e.target.value }))
            }
            required
            size="8"
          />
          <ButtonDelete type="submit" onClick={handleMainFormSubmit}>
            <SVG>
              <use href={symbol + '#icon-trash-03'} />
            </SVG>
          </ButtonDelete>
        </InputFlex>

        <ButtonAdd type="button" onClick={handleAddMore}>
          + Add more
        </ButtonAdd>

        <ButtonFlex>
          <ButtonSolution type="submit" onClick={handleMainFormSubmit}>
            Save
          </ButtonSolution>
          <ButtonSolution type="button" onClick={closeModal}>
            Cancel
          </ButtonSolution>
        </ButtonFlex>
      </FormStyle>
    );
  };

  return (
    <Section>
      <DeviceFlex>
        <TitelSection>
          <IconMeal src={LunchImage} alt="Lunch"></IconMeal>
          <TitelMeal>Lunch</TitelMeal>
        </TitelSection>

        <NutrientsSection>
          <TitelNutrients>
            Carbonohidrates:{' '}
            <NumericalValue>{totalNutrients.carbohydrate}</NumericalValue>
          </TitelNutrients>
          <TitelNutrients>
            Protein: <NumericalValue>{totalNutrients.protein}</NumericalValue>
          </TitelNutrients>
          <TitelNutrients>
            Fat: <NumericalValue>{totalNutrients.fat}</NumericalValue>
          </TitelNutrients>
        </NutrientsSection>
      </DeviceFlex>
      <ItemMeal>
        <ButtonRecord onClick={openModal}>+ Record your meal</ButtonRecord>
      </ItemMeal>
      {modalOpen && (
        <ModalRecord>
          <TitelRecord>Record your meal</TitelRecord>
          <TitelSection>
            <IconMeal src={LunchImage} alt="Lunch"></IconMeal>
            <TitelMeal>Lunch</TitelMeal>
          </TitelSection>
          <MealForm />
        </ModalRecord>
      )}
      {foodIntake &&
        foodIntake.map((foodIntake) => (
          <div key={foodIntake.id}>
            <p>{foodIntake.name}</p>
            <p>Carbonohidrates: {foodIntake.carbohydrate}</p>
            <p>Protein: {foodIntake.protein}</p>
            <p>Fat: {foodIntake.fat}</p>
          </div>
        ))}
    </Section>
  );
};

export default Lunch;
