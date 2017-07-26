import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class AppointmentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {appointment:'', expectduration:''}
  }
  submit = () => {
    var {appointment, expectduration} = this.state;
    console.log(this.state);
  }
  render(){
      var {appointment, expectduration} = this.state;
      return (
        <Page>
            <Navbar title="AppointmentForm" backLink="Back" sliding />

              <List form>
                <ListItem>
                  <FormLabel>appointment</FormLabel>
                  <FormInput type="datetime-local" onChange={(e)=>this.setState({appointment:e.target.value})} value={appointment} />>
                </ListItem>
                <ListItem>
                  <FormLabel>expect_duration</FormLabel>
                  <FormInput type="number" onChange={(e)=>this.setState({expectduration:e.target.value})} value={expectduration} />
                </ListItem>
            </List>

            <ContentBlock inner>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
            </ContentBlock>
        </Page>
    );
  }
};
