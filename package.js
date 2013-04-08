Package.describe({
    summary: "NodeJS's ncp packaged for meteor."
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/ncp.js'
    ], 'server'
    );

});
Npm.depends({ncp:"0.4.2"});