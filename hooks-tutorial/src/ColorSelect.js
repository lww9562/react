const ColorSelect = ({ setColor }) => {
    const changeColor = (e) => {
        setColor(e.currentTarget.value);
    };

    return <input type='color' onChange={changeColor} />;

};

export default ColorSelect;