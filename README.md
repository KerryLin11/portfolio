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


# Bugs
- [x] Close section components on reclick

# TODO:
- [x] 27/May: Try to understand, maybe diagram the infrastructure. getting kinda confusing.
- [x] Trackpad laptop support for two finger scrolling
- [ ] Bubble Component
  - [x] Different colors on bubble (get color vars as input somehow)
  - [x] Click to reveal component
  - [ ] Animate bubble and component expansion
  - [x] Add child bubbles
- [x] Panning functionality on infinite canvas 
- [x] Zoom functionality 
- [x] Refractor each make each bubble into a "node" containing a worldPos
- [ ] Create cards for about and contact
- [ ] Add SFX for UI (cbs doing this rn)
- [ ] Design the projects section.
- [ ] Find a way to embed my projects into the portfolio site
  - [ ] Unity webgl build (also that vr project)
  - [ ] Unreal engine build
  - [ ] Regular js projects
  - [ ] github repos
- [ ] 
- [ ] 
- [ ] 


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


