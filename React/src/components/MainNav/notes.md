Question #1

```jsx
const [isOpen, setIsOpen] = useState(false);

This line uses the useState hook to create a state value called isOpen. It starts as false, meaning the menu is closed. Later, we use setIsOpen to change that value to open or close the menu.

```

Question #2

```jsx
const location = useLocation();

useLocation is a React Router hook that tells us which page the user is currently on by giving us the current URL path.

```

Question #3

```jsx
useEffect(() => {
  setIsOpen(false);
}, [location.pathname]);


This useEffect runs when the page changes. When the user goes to another page, it sets isOpen to false, which closes the navigation menu.
```

Question #4

```jsx
function toggleNav() {
  setIsOpen((prev) => !prev);
}

This function toggles the menu. It takes the previous value of isOpen and switches it to the opposite. If the menu was open, it closes it. If it was closed, it opens it.

```

Question #5

```jsx
function closeNav() {
  setIsOpen(false);
}

This is a function declaration that forces the navigation menu to close by setting isOpen to false.

```

Question #6

```jsx
onClick = { closeNav };

onClick={closeNav} means when the user clicks ANY links, the navigation menu is closed.
```

Question #7

```jsx
What is the difference between these two?
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>

Link --- takes you to another page, but it doesn’t know or show which page you’re currently on.

NavLink --- also takes you to another page, but it can highlight or mark the active page.

```

Question #8

```jsx
const { user } = useContext(UserContext);
-- This line gets the current user information from UserContext so we know if the user is logged in or not.
```
