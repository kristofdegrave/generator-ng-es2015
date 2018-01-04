import <%= AppName %>Module from "./_<%= appName %>.module";

<%= AppName %>Module.config(Configuration);

Configuration.$inject = ["$stateProvider"];

function Configuration($stateProvider) {
    $stateProvider
        .state("<%= appName %>", {
            abstract: false,
            //component: "",
            url: "",
            //redirectTo: ""
        })
}