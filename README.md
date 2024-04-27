# Next Js Active NavLink Link

## Demo

![Demo](https://raw.githubusercontent.com/AbtahiHasan/images/main/packages/next-js-active-link.gif)

## Authors

- [@AbtahiHasan](https://www.github.com/abtahihasan)

## Documentation

[Documentation](https://www.abtahihasan.com/blogs/next-js-active-link)

## Installation

install with npm

```bash
  npm i next-js-active-link
```

install with yarn

```bash
  yarn add next-js-active-link
```

install with pnpm

```bash
    pnpm install next-js-active-link
```

## Usage/Examples

```javascript
import { NavLink } from "next-js-active-link";

const Demo = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            href="/"
            exact={true}
            activeClassName="bg-green-600"
            className="border"
          >
            Home
          </NavLink>
          <NavLink
            href="/blogs"
            activeClassName="bg-green-600"
            className="border"
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Demo;
```

## Props

| Props             | Type        | Description                                                               |
| :---------------- | :---------- | :------------------------------------------------------------------------ |
| `href`            | `string`    | **Required**. it's url page url                                           |
| `activeClassName` | `string`    | **Required**. this all classes applied when your route is active          |
| `children`        | `ReactNode` | **Required**. for example <p><img src="icon.svg" /> <span>Blog</span></p> |
| `className`       | `string`    | **Optional**. you can use any classNames                                  |
| `exact`           | `boolean`   | **Optional** if you want to exact match for example your path is ('/')    |
| `***`             | `any`       | **Optional** that accept <Link> component                                 |
