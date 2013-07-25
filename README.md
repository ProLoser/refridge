refridge
======

Refridge is a simple Shopping List webapp with one huge feature: **it knows when your food is going to expire!**

**How?**

When you add food to your shopping list, you will be able to specify the category and type of food (along with normal shopping-list notes). When you check off items in shopping mode, they are considered 'purchased' at that date (approximately). A database will be developed that contains expiration times if the food is frozen, refrigerated, left out, or cooked.

**So what?**

Well now you can get features such as:
* Notifications for certain food types when they are going to expire
* Recipe suggestions using soon-to-expire ingredients (integration with 3rd party?)
* Start a new shopping list with already-expired items
* Shared family shopping lists
* Know what you need to pick up from the store without having to check the fridge

## Setup
1. `$ bower install`
2. Setup Firebase authentication keys for 'Github' or whatever
3. `$ python -m SimpleHTTPServer` or whatever way you wish to host
4. Visit `localhost:8000` or whatever in the browser

# Roadmap
* Integration with online DB of food expiration times
* New custom DB of food expiration times
* Password-locked lists
* Shareable lists
* All features in the **so what?** section