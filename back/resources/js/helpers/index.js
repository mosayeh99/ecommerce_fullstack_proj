import jquery from 'jquery';
window.$ = window.query = jquery;

import {useToastr} from "./toastr.js";
window.toastr = useToastr();
