import React from 'react';

export default class Home extends React.Component {

  constructor(props,context){
  super(props, context);
      this.state = {
          writeIn:this.props.value,
      }
  }

   render() {

     let {writeIn}=this.state;

     return (

       <div>
        <h1>home</h1>
       </div>
     )
   }

}
