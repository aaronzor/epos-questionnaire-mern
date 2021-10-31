import { useSelector } from 'react-redux';

const BuildResult = () => {
    const result = useSelector((state) => state.result.value);

    const resultObject = {
        question1: result[0],
        question2: result[1],
        question3: result[2],
        question4: result[3],
        question5: result[4]
    };
    return resultObject;
};
export default BuildResult;
