const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
      path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
      //  path: path.resolve(__dirname, '/public'), // путь к каталогу выходных файлов - папка public
       publicPath: '/public/',
       filename: "[name].js" // название создаваемого файла
   },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
    // По умолчанию Webpack понимает только файлы javascript,
    // поэтому для файлов ts необходимы специальные инструменты - загрузчики.
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                   {
                       loader: 'awesome-typescript-loader',
                       options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                    } ,
                    'angular2-template-loader'
               ]
            }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    )
  ]
}
/*
В секции entry определяются входные файлы для компиляции и имена сборок.
В данном случае для файла "src/polyfills.ts" будет создаваться сборка "polyfills",
а из файла "src/main.ts" (который в свою очередь подтягивает другие файлы приложения)
будет комилироваться сборка "app".

В секции output определяется, что сборки будут находиться в каталоге public,
и для них будут созданы файлы с названиями сборок.
Плейсхолдер [name] будет передать название сборки, то есть polyfills или app.

В секции resolve указываются расширения, которые будут применяться к модулям
в файлах typescript.

Секция module.rules определяет загрузчики файлов typescript,
которые будут использоваться для сборки проекта.
По умолчанию Webpack понимает только файлы javascript,
поэтому для файлов ts необходимы специальные инструменты - загрузчики.
Здесь для загрузки файлов typescript применяются загрузчики awesome-typescript-loader
и angular2-template-loader.

секция plugins определяет плагины - вспомогательные инструменты,
которые применяются при сборке.
В частности, плагин webpack.ContextReplacementPlugin позволяет
управлять путями к файлам вне зависимости используем мы Windows или Linux.
*/