import React from 'react';

const transformation = {
  'n\'': ['nh'],
  'c': ['ch', 'tr'],
  'D': ['Đ'],
  'z': ['d', 'gi', 'r'],
  'd': ['đ'],
  'g': ['gh'],
  'f': ['ph'],
  'x': ['kh'],
  'k': ['c', 'k', 'qu', 'q'],
  'q': ['ngh', 'ng'],
  's': ['x'],
  'w': ['th'],
};

function isUpperCase(character) {
  return character === character.toUpperCase();
}

function translate(input) {
  let i = 0;
  let result = '';
  let length = input.length;

  while (i < length) {

    let matchLength = 0;
    let replacement = null;

    for (const character in transformation) {
      const matches = transformation[character];
      const current = input.substring(i);
      

      for (let j = 0; !replacement && j < matches.length; j++) {
        const match = matches[j];

        if (current.toLowerCase().startsWith(match)) {

          if (isUpperCase(current.charAt(0))) {
            replacement = character.toUpperCase();
          } else {
            replacement = character;
          }

          matchLength = match.length;
        }
      }

      if (replacement) {
        break;
      }
    } 

    if (replacement) {
      result += replacement;
      i += matchLength;
    } else {
      result += input.charAt(i);
      i++;
    }
  }
  
  return result;
}

const styles = {
  maxWidth: "100%",
  minHeight: "200px",
  outline: "none",
  fontSize: "x-large"
}

export class TieqViet extends React.Component {
  componentWillMount() {
    this.setState({
      text: "Anh Khiêm đẹp trai nhất"
    })

    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return <div className="ui stacked segments">
            <textarea className="ui segment" style={styles} value={this.state.text} onChange={this.updateText} />
            <div className="ui segment">
              <a className="ui red ribbon label">{translate("Kết Quả")}</a><p />
              <p>
                {translate(this.state.text)}
              </p>
            </div>
           </div>
  }
}