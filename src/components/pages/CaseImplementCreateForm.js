import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class CaseImplementCreateForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {subject:'', expect_hours:8, owner:'sarinaphat'}
  }
  submit = () => {
    var {subject,expect_hours,owner} = this.state;
    console.log(this.state);
  }
  render(){
      var {subject,expect_hours,owner} = this.state;
      return (
        <Page>
            <Navbar title="CaseImplementCreateForm" backLink="Back" sliding />

              <List form>
                <ListItem>
                  <FormLabel>Subject</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({subject:e.target.value})} value={subject} />
                </ListItem>
                <ListItem>
                  <FormLabel>Expect Hours</FormLabel>
                  <FormInput type="number" onChange={(e)=>this.setState({expect_hours:e.target.value})} value={expect_hours} />
                </ListItem>

                <ListItem smartSelect smartSelectBackOnSelect value={owner} title="Owner">
                  <select onChange={(e)=>this.setState({owner:e.target.value})} name="mac-owner">
                    <option value="autsakorn">Autsakorn</option>
                    <option value="sarinaphat">Sarinaphat</option>
                  </select>
                </ListItem>


            </List>
            <ContentBlock inner>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
            </ContentBlock>
        </Page>
    );
  }
};
