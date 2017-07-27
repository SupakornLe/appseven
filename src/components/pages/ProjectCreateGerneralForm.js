import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,Button,FormLabel} from 'framework7-react';
import moment from 'moment';

const pStyle = {margin: '1em 0'};
export default class ProjectCreateGerneralForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      project_name:'', end_user:'', end_user_address:'',
      start:moment().format('YYYY-MM-DD'),
      end:moment().add(30, 'days').format('YYYY-MM-DD')
    }

    console.log(moment().format('YYYY-MM-DD'));
  }
  submit = () => {
    var {project_name,end_user,end_user_address,start,end} = this.state;
    console.log(this.state);
  }

  renderButtonSubmit = () => {
    var{project_name,end_user,end_user_address} = this.state;
    if(project_name.length>3!="" && end_user.length>3!="" && end_user_address.length>3!=""){
      return (<ContentBlock inner>
        <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
      </ContentBlock>);
    }else {
      return <spam />
    }
  }

  render(){
      var {project_name,end_user,end_user_address,start,end} = this.state;
      return (
        <Page>
            <Navbar title="ProjectCreateGerneralForm" backLink="Back" sliding />

              <List form>
                <ListItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({project_name:e.target.value})} value={project_name} />
                </ListItem>
                <ListItem>
                  <FormLabel>End user</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({end_user:e.target.value})} value={end_user} />
                </ListItem>
                <ListItem>
                  <FormLabel>End user address</FormLabel>
                  <FormInput type="textarea" onChange={(e)=>this.setState({end_user_address:e.target.value})} value={end_user_address} />
                </ListItem>
                <ListItem>
                  <FormLabel>Start Project</FormLabel>
                  <FormInput type="date" onChange={(e)=>this.setState({start:e.target.value})} value={start} />
                </ListItem>
                <ListItem>
                  <FormLabel>Expect End</FormLabel>
                  <FormInput type="date" onChange={(e)=>this.setState({end:e.target.value})} value={end} />
                </ListItem>


            </List>
            {this.renderButtonSubmit()}
        </Page>
    );
  }
};
