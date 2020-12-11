### Steps
1) rails new PostVueRails --database=postgresql
2) rails webpacker:install:vue
3) yarn add vue-turbolinks
4) Add vue app component in application.js and when route not match from rails routes the it'll redirecti to vue_application
5) Create manually folder in controllers api/v1
6) Create post controller under api/v1
    rails generate controller api/v1/posts --skip-template-engine
7) Create javascript/components folder and create components as controller wise

### VUE API Integration using axios:
1) yarn add axios
2) import axios from "axios"; in components (In which do you want to call API)
3) Use:
   axios.method_name('path_name').then(response => { set_response })
   method_name: Get, Post, Delete, Put
   path_name: In which Api do you want to call

4) While updating, deleting, creating data you'll get "Can't verify CSRF token authenticity."
   Disable CSRF token.
   Add skip_before_action :verify_authenticity_token in application_controller.rb

5) Other option for "Can't verify CSRF token authenticity."
   get csrf token and pass in header in API call

### Go One route to aonther routes (Routing)
1) yarn add vue-router
2) Make seprate file for vue routing. 
   app/javascript/packs/router.js -> create router.js
3) import vue-router and register it.
4) import router.js in main.js and appy it in creating vue component

   

### Best way to call API
https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322

### Repository Pattern
Repositories are classes or components that encapsulate the logic required to access data sources.
-> Centralize common data access functionality

### Create single endpoint API call
1) Create repository.js in javascript/packs folder
2) Create common code for API call and then import repository.js file and use code to other file.
3) axios({
      url: path of request API,
      methid: Which method do you want to perform,
      data: pass params,
      headers: pass csrf token
   })
4) Call this from other repository file


### Rails API Integration
### active_model_serializers and jsonapi-serializer --> alternatives of each other

https://www.youtube.com/watch?v=Ah5SaN1linA
1) Add gem 'active_model_serializers' in gem file.
2) rails g serializer post --> give model name
3) Define attributes in postserializer and custome attribute define with def function
4) render json: @post --> called postserializer


https://github.com/jsonapi-serializer/jsonapi-serializer
5) gem 'jsonapi-serializer'
6) Call serializer  Serializer_Name.new(model_object).serializable_hash.to_json
7) Custom attributes add with attribute keyword






### bin/webpack-dev-server
we’ll start a separate webpack server. We don’t need to do this, but it will make JS compile times much faster and also auto reload the page on JS change, so it is nice to have. Open a separate console, go into the project directory and type:
