import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class CaseStatusButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {i:'nut', j:'mas'}
  }
  submit = () => {
    var {i, j} = this.state;
    console.log(this.state);
  }
  render(){
      var {i, j} = this.state;
      return (
        <Page>
            <Navbar title="CaseStatusButton" backLink="Back" sliding />
            <ContentBlock inner>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Response</Button>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Onsite</Button>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Workaround</Button>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Resolve</Button>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Pending</Button>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Worklog</Button>

            </ContentBlock>
        </Page>
    );
  }
};
