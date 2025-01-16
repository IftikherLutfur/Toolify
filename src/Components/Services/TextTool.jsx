import { useState } from "react";
import { NavLink } from "react-router-dom";

const TextTool = () => {
    const [myText, setMyText] = useState('');
    const [textStyle, setTextStyle] = useState({
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        color: '#000000',
    });

    const onChange = (event) => {
        setMyText(event.target.value);
    };

    // Text Styling
    const makeBold = (event) => {
        event.preventDefault();
        setTextStyle({ ...textStyle, fontWeight: textStyle.fontWeight === 'bold' ? 'normal' : 'bold' });
    };

    const makeItalic = (event) => {
        event.preventDefault();
        setTextStyle({ ...textStyle, fontStyle: textStyle.fontStyle === 'italic' ? 'normal' : 'italic' });
    };

    const makeUnderline = (event) => {
        event.preventDefault();
        setTextStyle({ ...textStyle, textDecoration: textStyle.textDecoration === 'underline' ? 'none' : 'underline' });
    };

    const changeTextColor = (event, color) => {
        event.preventDefault();
        setTextStyle({ ...textStyle, color });
    };

    // Text Transformations
    const lowerCase = (event) => {
        event.preventDefault();
        setMyText(myText.toLowerCase());
    };

    const upperCase = (event) => {
        event.preventDefault();
        setMyText(myText.toUpperCase());
    };

    const capitalize = (event) => {
        event.preventDefault();
        const capitalizeText = myText.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
        setMyText(capitalizeText);
    };

    const reverse = (event) => {
        event.preventDefault();
        const reverseText = myText.split('').reverse().join('');
        setMyText(reverseText);
    };

    const bulletList = (event) => {
        event.preventDefault();
        const bulletText = myText
            .split('\n')
            .map((line) => `• ${line}`)
            .join('\n');
        setMyText(bulletText);
    };

    const numberedList = (event) => {
        event.preventDefault();
        const numberedText = myText
            .split('\n')
            .map((line, index) => `${index + 1}. ${line}`)
            .join('\n');
        setMyText(numberedText);
    };

    const clear = (event) => {
        event.preventDefault();
        setMyText('');
    };

    const colors = [
        '#FF0000', '#00FF00', '#0000FF', '#FFA500', '#800080', '#000000',
        '#FFC0CB', '#808080', '#FFFF00', '#008000', '#00FFFF',
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
            <nav aria-label="breadcrumb" className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline text-blue-600">
                Home
              </NavLink>
            </li>
            <li>/</li>
            <li className="text-gray-600">Text Tools</li>
          </ol>
        </div>
      </nav>

            <div className="mt-6 w-full max-w-4xl px-4">
                <textarea
                    onChange={onChange}
                    value={myText}
                    className="w-full p-4 border-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your text here..."
                    rows={10}
                    style={textStyle}
                ></textarea>

                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    {/* Styling Buttons */}
                    <button onClick={makeBold} className="btn font-bold">Bold</button>
                    <button onClick={makeItalic} className="btn"><em>italic</em></button>
                    <button onClick={makeUnderline} className="btn underline">Underline</button>

                    {/* Text Transformation Buttons */}
                    <button onClick={lowerCase} className="btn">Lowercase</button>
                    <button onClick={upperCase} className="btn">Uppercase</button>
                    <button onClick={capitalize} className="btn">Capitalize</button>
                    <button onClick={reverse} className="btn">Reverse</button>
                    <button onClick={clear} className="btn bg-red-600 px-2 text-white rounded-lg">Clear</button>
                    <button onClick={bulletList} className="btn">Bullet List</button>
                    <button onClick={numberedList} className="btn">Numbered List</button> <br />
                    {/* Text Color Buttons */}
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={(event) => changeTextColor(event, color)}
                            style={{ backgroundColor: color }}
                            className="w-8 h-8 rounded-full shadow"
                        ></button>
                    ))}

                    {/* List Buttons */}
                    
                </div>
            </div>

            <div className="mt-4 text-center text-gray-700">
                <h1 className="text-xl font-bold">
                    {myText.trim() ? myText.split(/\s+/).length : 0} Word(s) & {myText.length} Character(s)
                </h1>
            </div>
        </div>
    );
};

export default TextTool;
