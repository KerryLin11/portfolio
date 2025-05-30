# Learning Outcomes

## Technologies I'm want to learn
- **React**: Component-based JS framework
- **Vite**: Modern frontend server
- **Tailwind CSS & shadcn**: Utility CSS for UI
- **Framer Motion**: Animations
- **TypeScript**: cuz I already know js
- **Routing**: Managing pages through react-router-dom
- **Deployment**: Host project on smth like Vercel, Netlify, or GitHub Pages

# Notes:

## React Router Dom
- React-router-dom `<Link>` binds urls to react components removing the need for `<a>` tags which requires page reloads
- All children components inside `<Router>` can access routing info
- Routing context must wrap everything that needs navigation (eg. `<Navbar>` inside `App()`)

## React
- React is basically OOP with composition > inheritance
- Surround functions in `{() => {return someJSX}}` if you want to return JSX expressions
- `useState<>()` is a hook that allows you to create state variables
 - Eg: `const [activeSection, setActiveSection] = useState<string | null>(null);`
 - `activeSection` is the state variable
 - `setActiveSection` is a setter function to update the state
 - `<string | null>` defines the state variable type
 - `(null)` is the initial value
- `useEffect` hook that runs after component returns
- `useRef` hook that allows you cache the same reference between rerenders
- `useMemo` hook that avoids rerunning functions in component rerenders by caching the result
- `useCallback` hook that avoids rerunning functions in component rerenders by caching the function. (caches the same function instance)
- Component Hook Rendering Life-cycle:
- WheelEvent.deltaX` and `event.deltaY` is axis scrollSpeed per frame (scrollSpeed/1 frame). 

<table>
  <tr>
    <th>Hook</th>
    <th>When it Runs</th>
  </tr>
  <tr>
    <td>useState</td>
    <td>On function call</td>
  </tr>
  <tr>
    <td>useEffect</td>
    <td>After render and DOM update</td>
  </tr>
  <tr>
    <td>useRef</td>
    <td>Doesn't cause re-renders; survives across them</td>
  </tr>
  <tr>
    <td>useMemo, useCallback</td>
    <td>Caches values/functions. Only recalculates if dependencies change.
</td>
  </tr>
</table>

## Framer Motion
- `<AnimatePresence>` allows you to animate a component that's removed from the DOM
- `<motion.div>` turns children into components that can be animated with Framer Motion
  - `key="contact"` is used to identify the component for `AnimatePresence`
  - `initial={{ opacity: 0, scale: 0.95 }}` Initial Conditions
  - `animate={{ opacity: 1, scale: 1 }}` End Conditions
  - `exit={{ opacity: 0, scale: 0.95 }}` Exit Animation
  - `transition={{ duration: 0.3 }}` is the duration of the animation
  - With the current above setup, `initial -> animate` is `0.3s` and `animate -> exit` is `0.3s`.
  - `transition={{ duration: 0.3, exit: { duration: 0.2 } }}` This allows you to specify enter and exit durations separately.

# Tailwind shorthands for reference
- bg-blue-100 <!-- light version -->
- bg-blue-500 <!-- normal version -->
- bg-blue-900 <!-- dark version -->
- text-white <!-- white text -->
- p-4 <!-- padding 4 -->
- m-2 <!-- margin 2 -->
- rounded-lg <!-- rounded corners -->
- flex <!-- flex container -->
- justify-center <!-- justify content center -->
- items-center <!-- align items center -->
- h-screen <!-- height of screen -->
- w-screen <!-- width of screen -->
- overflow-hidden <!-- overflow hidden -->
- cursor-grab <!-- grab cursor -->
- active:cursor-grabbing <!-- grab cursor when active -->
- transition-transform <!-- transition transform --> 
- duration-75 <!-- duration 75ms -->
- ease-out <!-- ease out -->
- hover:scale-110 <!-- on hover: scale 110% -->
- shadow-md <!-- shadow medium -->
- z-10 <!-- z-index 10 -->
- absolute <!-- absolute positioning -->
- relative <!-- relative positioning -->
- left-1/2 <!-- left 50% -->
- top-1/2 <!-- top 50% -->
- -translate-x-1/2 <!-- translate x -50% -->
- -translate-y-1/2 <!-- translate y -50% -->
- min-w-[100vw] <!-- min width 100vw -->


