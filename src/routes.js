import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {findmin} from './components/pages/findmin';
import CaseImplementCreateForm from './components/pages/CaseImplementCreateForm';
import ContactUserForm from './components/pages/ContactUserForm';
import AppointmentForm from './components/pages/AppointmentForm';
import CaseStatusButton from './components/pages/CaseStatusButton';
import CaseStatusForm from './components/pages/CaseStatusForm';
import CaseStatusFormPending from './components/pages/CaseStatusFormPending';
import CaseStatusFormResolve from './components/pages/CaseStatusFormResolve';
import ConfirmSrDelete from './components/pages/ConfirmSrDelete';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/findmin/',
    component: findmin
}, {
    path: '/caseimplementcreateform/',
    component: CaseImplementCreateForm
}, {
    path: '/contactuserform/',
    component: ContactUserForm
}, {
    path: '/appointmentform/',
    component: AppointmentForm
}, {
    path: '/caseStatusbutton/',
    component: CaseStatusButton
}, {
    path: '/casestatusform/',
    component: CaseStatusForm
}, {
    path: '/casestatusformpending/',
    component: CaseStatusFormPending
}, {
    path: '/casestatusformresolve/',
    component: CaseStatusFormResolve
}, {
    path: '/confirmsrdelete/',
    component: ConfirmSrDelete
}];
