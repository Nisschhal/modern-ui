import React from "react"

const Keyboard = () => {
  // create keyboard layout with just alphabets
  return (
    <div>
      /************* ✨ Codeium Command ⭐ *************/
      <div className="keyboard">
        {["qwertyuiop", "asdfghjkl", "zxcvbnm"].map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.split("").map((key, keyIndex) => (
              <button key={keyIndex} className="key">
                {key}
              </button>
            ))}
          </div>
        ))}
        <div className="keyboard-row">
          <button className="key">Space</button>
        </div>
      </div>
      /****** 744871cd-69e8-45f1-95b6-34539be04394 *******/
    </div>
  )
}

export default Keyboard
