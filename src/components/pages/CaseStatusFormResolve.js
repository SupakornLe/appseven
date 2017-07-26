import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class CaseStatusFormResolve extends React.Component {

  constructor(props){
    super(props);
    this.state = {worklog:'', solution:'', detail:''}
  }
  submit = () => {
    var {worklog, solution, detail} = this.state;
    console.log(this.state);
  }

  renderButtonSubmit = () => {
    var {worklog, solution, detail} = this.state;
    if(worklog.length>3!="" && solution.length>3!="" && detail.length>3!=""){
      return (<ContentBlock inner>
        <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
      </ContentBlock>);
    }else {
      return <spam />
    }
  }

  render(){
      var {worklog, solution, detail} = this.state;
      return (
        <Page>
            <Navbar title="CaseStatusFormResolve" backLink="Back" sliding />

              <List form>
                <ListItem>
                  <FormLabel>worklog</FormLabel>
                  <FormInput type="textarea" onKeyup={(e)=>this.setState({worklog:e.target.value})} value={worklog} />
                </ListItem>
                <ListItem>
                  <FormLabel>solution</FormLabel>
                  <FormInput type="textarea" onKeyup={(e)=>this.setState({solution:e.target.value})} value={solution} />
                </ListItem>
                <ListItem>
                  <FormLabel>solution detail</FormLabel>
                  <FormInput type="textarea" onKeyup={(e)=>this.setState({detail:e.target.value})} value={detail} />
                </ListItem>
            </List>
            {this.renderButtonSubmit()}
        </Page>
    );
  }
};
