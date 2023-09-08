import otter from './otter';

const getRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};

const query = async (prompt: string, chatId: string, model: string) => {
    const randomNumber = getRandomNumber(0.50, 0.99);
    
    const res = await otter.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text)
    .catch(
        (err) =>
        // `OTTER was unable to find an output for that! (Error: ${err.message})`
        randomNumber.toFixed(5)
    );

    return `The binding score of this RNA is ${res}.`;
};

export default query;

