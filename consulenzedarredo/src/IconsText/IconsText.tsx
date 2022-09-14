import React, { FC } from 'react';
import './IconsText.css';
import IconsTextRowModel from "./IconsTextRow.model";

interface IconsTextProps {
  rows:IconsTextRowModel[]
}

class IconsText extends React.Component<IconsTextProps>{
  render() {
    return (<>
      <div className={"iconsText-container"}>
        {
          this.props.rows.map(row=>(
            <div className={"row"}>
              <div className={"icon"}>
                <i className={`${row.icon}`}></i>
              </div>
              <div className={"text"}>
                <p>{row.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>);
  }
}

export default IconsText;
