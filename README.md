# EMRE_YILDIRIM Pretty Little Thing

# Installing on Windows
# babel-loader gives error sometimes while installing, I could not find the reason for now. Please install as admin if it happens. It is a TO-DO for me.

```
npm install
```

# Running (Android)

```
npm run android
```

# Running (iOS) 
# UNFORTUNATELY, I DO NOT HAVE A MAC RIGHT NOW AND COULD NOT TEST IT FOR IOS YET. IT IS ANOTHER TO DO FOR ME
# And "npm pod-install" should be called for before running on ios, ofc

```
npm run ios
```

# Tests (jest)

```
npm run test --coverage
```


# Case Brief

The objective is to build a basic eCommerce mobile app (React Native) that integrates the product and menu data from this DB

https://my-json-server.typicode.com/benirvingplt/products

Data can be loaded like:
https://my-json-server.typicode.com/benirvingplt/products/products
https://my-json-server.typicode.com/benirvingplt/products/menu
https://my-json-server.typicode.com/benirvingplt/products/products/1

There are a few basic shopping requirements

1. A user should be able to:
2. View a list of products, with their price/info
3. Add products to a basket
4. Navigate to a basket screen
5. Edit quantity/remove items from the basket screen

Whilst this is only a sample application, it should be built in the same manner as a production application. Consideration should be put into data fetching, state management, static typing and testing. Use whatever libraries you are most comfortable with. Use of hooks for data/state management is preferred.
Styling is not important, bare elements with no mark up will suffice, as long as it is usable.

It is much more valuable to demonstrate how you think about data/state management and component composition than it is to make the components look nice in this case.

Please don't spend more than a few hours working on this. It does not matter if you cannot complete all the requirements, please substitute code for comments/explanation where applicable.

Please try to do unit testing if you can and submit via Github/Bitbucket link only.
