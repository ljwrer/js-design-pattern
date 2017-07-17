# js-design-pattern
## yet another powerful way to read a code book 
This is a project when I read book of [《JavaScript设计模式与开发实践》](https://book.douban.com/subject/26382780/)
I write unit test for every code sample form that awesome book,then I close the book and write code by myself util it pass all the unit test.
That help me a lot.

## Unit test
the unit test use karma+webpack+mocha+chai+sinon+istanbul.
It spend a long time to write that complex config file for me(one work day),I think it could be a boilerplate for my future project.
I also add Vue.js support on branch [https://github.com/ljwrer/js-design-pattern/tree/dev-vue](https://github.com/ljwrer/js-design-pattern/tree/dev-vue)


## Build Setup

``` bash
# install dependencies
npm install

# run node test with nyc+mocha
npm run test

#  browser env,Chrome as default
npm run karma


