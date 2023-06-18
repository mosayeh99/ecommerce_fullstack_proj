### Install this packages

> npm install vue
>
> npm install --save-dev @vitejs/plugin-vue
>
> npm install vue-router
>
> npm install jquery


- file: vite.config.js

```
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
```

- Add lines to resources/js/bootstrap.js
```
import jquery from 'jquery';
window.$ = window.query = jquery;
```



### Create component

- resources
    - js
        - components
            - Dashboard.vue


### Create routes.js

- resources
    - js
        - routes.js

```
import Dashboard from "./components/Dashboard.vue";

export default [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },
]
```


### file app.js

```
import './bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import {createRouter, createWebHistory} from "vue-router";
import Routes from "./routes.js";

const app = createApp({});

const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

app.use(router);

app.mount('#app');
```


### Create Application Controller

> php artisan make:controller ApplicationController

```
<?php

namespace App\Http\Controllers;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('layouts.admin.layout');
    }
}
```

- Add route for this method
> Route::get('{view}', ApplicationController::class)->where('view', '(.*)');


#
#
## Vue Validation

> npm install vee-validate --save
>
> npm i yup

- Replace `<form>` with `<Form />` and remove the .prevent modifier.
- Replace `<input>` with `<Field />` while keeping the same attributes.
- v-model not needed to be added to `<Field />`
- Add `validation-schema` directive to `<Form>` element
- Add `v-slot="{ errors }"` to `<Form>` element
```
<template>
  <div id="app">
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" :initial-values="formValues">
      
      <Field name="name" type="text" :class="{ 'is-invalid': errors.name }"/>
      <span class="text-danger" v-if="errors.name">
        {{ errors.name }}
      </span>
            
      <Field name="email" type="email" :class="{ 'is-invalid': errors.email }"/>
      <span v-if="errors.email">
        {{ errors.email }}
      </span>
                  
      <Field name="password" type="password" :class="{ 'is-invalid': errors.password }"/>
      <span v-if="errors.password">
        {{ errors.password }}
      </span>

      <button type="submit">Sign up</button>
    </Form>
  </div>
</template>


<script setup>
import {Form, Field} from "vee-validate";
import * as yup from 'yup';

const createUser = (values, { setErrors }) => {
    axios.post('url', values)
        .then(res => console.log(res.data))
        .catch(err => {
            setErrors(err.response.data.errors);
        });
}

const schema = yup.object({
    email: yup.string().required().email(),
    name: yup.string().required(),
    password: yup.string().required().min(8),
});
</script>
```

- Update schema to ignore password if not given
```
const updateSchema = yup.object({
    email: yup.string().required().email(),
    name: yup.string().required(),
    password: yup.string().when((password, schema) => {
        return password ? schema.min(8) : schema
    }),
});
```

#
#
#


### Use toast notification
> npm install --save toastr

- create file toastr.js in resources/js/toastr.js
```
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export function useToastr() {

    toastr.options.closeButton = true;
    toastr.options.progressBar = true;

    return toastr;
}
```

- Then add lines to resources/js/bootstrap.js
```
import {useToastr} from "@/toastr.js";
window.toastr = useToastr();
```

- To user toastr in component
```
toastr.success('User Created Successfully');
```
