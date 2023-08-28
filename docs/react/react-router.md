https://reactrouter.com/en/main

## 安装

`npm install react-router-dom`

## 使用
使用Router组件包裹根节点可以实现路由访问

### BrowserRouter
BrowserRoute将当前页面的路由地址存储在浏览器的内置历史记录堆栈中
```JSX
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>content</div>
    </BrowserRouter>
  );
}

export default App;
```

### HashRouter

```JSX
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>content</div>
    </HashRouter>
  );
}

export default App;

```


### Route
Route 用于定义路径和React组件之间的关系。比如当用户访问 /about 的url的时候，页面需要加载React组件<About />

```JSX
import { BrowserRouter, Routes, Route } from "react-router-dom";

const About = () => {
  return <div>about</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/about/a?/b"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

#### 动态路由
path可以增加动态路由，比如path = '/about/:id'，那么当我们的url = /about/1，或者url = /about/abc 都可以匹配上

#### 可选片段
我们可以在path映射的路径增加 ？
```jsx
 <Route
  path="/about/a?/b"
  element={<About />}
/>
```
那么，我们/abourt/a/b和/about/b 都可以映射About组件
#### 嵌套布局
在开发时候，我们很多页面的有些内容是相同的，比如说左侧导航，顶部内容，每次录用切换的时候只用内容区域变化，剩下的东西公用不变。这个时候就需要进行嵌套路由布局。
```JSX
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const About = () => <div>About Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <h1>About Title</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/a" element={<About />}></Route>
          <Route path="/b" element={<div>content</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```
通过上面这个代码，我们/a和/b两个页面就通过About Title这个标题了。
![](assets/1.png)

