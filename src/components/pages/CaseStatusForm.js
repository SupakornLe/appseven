import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class CaseStatusForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {textarea:''}
  }
  submit = () => {
    var {textarea} = this.state;
    console.log(this.state);
  }

  renderButtonSubmit = () => {
    var {textarea} = this.state;
    if(textarea.length>3!=""){
      return (<ContentBlock inner>
        <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
      </ContentBlock>);
    }else {
      return <spam />
    }
  }

  render(){
      var {textarea} = this.state;
      return (
        <Page>
            <Navbar title="CaseStatusForm" backLink="Back" sliding />

              <List form>
              <ListItem>
                <FormLabel>textarea</FormLabel>
                <FormInput type="textarea" onKeyup={(e)=>this.setState({textarea:e.target.value})} value={textarea} />
              </ListItem>
            </List>
            {this.renderButtonSubmit()}
        </Page>
    );
  }
};
