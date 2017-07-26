import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class ContactUserForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {name:'', email:'', mobile:'', phone:'', company:''}
  }
  submit = () => {
    var {name,email,mobile,phone,company} = this.state;
    console.log(this.state);
  }
  render(){
      var {name,email,mobile,phone,company} = this.state;
      return (
        <Page>
            <Navbar title="ContactUserForm" backLink="Back" sliding />

              <List form>
                <ListItem>
                  <FormLabel>Name</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({name:e.target.value})} value={name} />
                </ListItem>
                <ListItem>
                  <FormLabel>Email</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({email:e.target.value})} value={email} />
                </ListItem>
                <ListItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({mobile:e.target.value})} value={mobile} />
                </ListItem>
                <ListItem>
                  <FormLabel>Phone</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({phone:e.target.value})} value={phone} />
                </ListItem>
                <ListItem>
                  <FormLabel>Company</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({company:e.target.value})} value={company} />
                </ListItem>


            </List>
            <ContentBlock inner>
              <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
            </ContentBlock>
        </Page>
    );
  }
};
