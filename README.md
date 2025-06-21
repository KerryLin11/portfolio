# Learning Outcomes

## Technologies I want to learn
- **React**: Component-based JS framework
- **Vite**: Modern frontend server
- **Tailwind CSS & shadcn**: Utility CSS for UI
- **Framer Motion**: Animations
- **TypeScript**: cuz I already know js
- **Routing**: Managing pages through react-router-dom
- **Deployment**: Host project on smth like Vercel, Netlify, or GitHub Pages

# Notes:

## General
- `npm run build` builds the project
- `npm run preview` previews the build
- `npm run dev` runs the dev server
- Clean Reset: `rm -r -fo node_modules && npm install` deletes the node_modules folder and reinstalls it. (Useful for when files are corrupted)
- Components or data lists?
  - Use components if it's about structure
  - Use data lists if it's about content

## Terminal
CMD = Simple, plain-text output shell -> good for basic commands
PowerShell = Modern, object-based shell -> more powerful, scriptable, and designed for automation.
Terminal = A host/container for shells like CMD, PowerShell, WSL, etc. -> lets you run multiple shells in tabs with customization.

### Commands
- `start filename.txt` opens the file
- `cd DirectoryName`: Change current directory to the specified folder.
- `cd .\\`: Change directory to the current folder (effectively does nothing but refresh).
- `mkdir`: Create a new directory (folder) with the given name.
- `rmdir`: Remove an empty directory (fails if directory contains files or subfolders).
- `cls` or `clear`: Clear the terminal screen (`cls` for Windows CMD/PowerShell, `clear` for Linux/macOS).
- `tasklist`: List all running processes/tasks on the system.
- `tasklist | findstr [name]`: Filter running tasks to show only those matching the given name.
- `taskkill /IM [name] /F`: Forcefully terminate all processes matching the image name (`/IM` = image name, `/F` = force).
- `ls` or `dir`: List files and directories in the current folder (`ls` on Linux/macOS, `dir` on Windows).
- `rm [name]`: Remove/delete a file or directory (on Unix-like systems, deletes only files or empty directories).
- `rm -r [name]`: Recursively delete a directory and all of its contents (files and subdirectories).
- `tree /f > treefile.txt` for viewing directory structure 


- `systeminfo`: Display detailed system information (Windows).
- `ipconfig`: Display network configuration and IP address info (Windows).

### Git Commands (Actually Useful)
- `git init`: Initialize git repo.
- `git status`: 
  - untracked: Not being tracked by Git
  - staged: Included in next commit
  - committed: committed
  - Commit objects use the SHA-1 Hash function (Secure Hash Algorithm)
    - Takes any length string -> outputs 160-bit value
- `-h` after a command for help.


- `git add .`: Add all changes in the current directory to the staging area.
- `git commit -m "Your commit message"`: Commit the changes with a message.
  - `-m`: message
- `git push origin main`: Push the committed changes to the 'main' branch on the 'origin' remote repository.
- `git log`: View commit history
  - `git log --oneline`: 1 line per commit
  - `git log --decorate=full` Shows all refs and tags
  - `git log -3` Shows last 3 commits

- `git pull origin main`: Pull the latest changes from the 'main' branch on the 'origin' remote repository.
- `git cat-file -p <SHA-1 hash>`: View content of object (blob or tree)
  - `-p`: pretty print
- `git branch` Shows all branches and current branch
  - `git branch -m oldname newname` Rename branch
- `git switch <branch name>` Switch to branch <branch name>
- `git checkout <branch name>` basically git switch but supports file-level changes
- `git rebase <branch name>` Rebase current branch onto <branch name>
  - `git rebase --continue` Continue rebase
  - `git rebase --abort` Abort rebase
- `git merge <branch name>` Merge <branch name> into current branch
  - `git merge --abort` Abort merge
- `git reset --soft <commit hash>`: Move the branch pointer commit hash
- `git reset --soft HEAD~1` Move the branch pointer 1 commit back
- `git reset --hard <commit hash>`: Move the branch pointer commit hash and remove all changes
- `git restore --staged <file>` Restore file to previous commit
  - `--staged`: Remove from staging area
  - `--worktree`: Remove from worktree
- `git remote add origin https://github.com/yourusername/your-repo.git` Add remote repository
  - `git remote -v` View remote repositories
  - `git remote rename origin github` Rename remote repository
- `git push -u origin main`
  - `-u`: upstream
  - `origin`: remote repository
  - `main`: branch
- `git fetch origin main`: Fetch the latest changes from the 'main' branch on the 'origin' remote repository.
- `git pull origin main`: Fetch and merge
- `git pull origin main --rebase`: Fetch and rebase
- `git stash`: Stash changes
  - `git stash pop`: Apply stashed changes
  - `git stash list`: List stashed changes
  - `git stash drop`: Drop stashed changes
- `git diff <commit hash> <commit hash>`: Compare 2 commits
- `git diff <commit hash> <commit hash> --name-only`: Compare 2 commits and show only the names of the files that changed

### Git Commands (Still useful)
- `gitk` opens commit history GUI
- `git gui` opens GUI for staging changes
- `git reflog` Shows all commits and git actions logged
- `git cherry-pick <commit hash>`: Apply a specific commit's changes to a branch



### Git Commands (Plumbing)
- `git config pull.rebase false`: Disable rebase on pull
- `git config --add --global user.email` "testemail@email.com"
  - `git config`: Command to manage Git configuration.
  - `--add`: Flag stating add config.
  - `--global`: Flag stating if configuration is stored globally in `.gitconfig`. Opposite is: `local`, which stores config in current repo.
  - `user.email`: The key. (`user` is the section, `email` is the section key)
  - `"testemail@email.com"`: The key's value
- `cat .\.git\config` or `git config --list --local`: View local config
- `git config --remove-section <section name>`: Remove section (`user`) from config
- System -> Global -> Local -> Worktree (git config --list --<system/global/local/worktree>)
  - System: All users (`.gitconfig`)
  - Global: Current User (`.gitconfig`)
  - Local: Current Repo (`.git/config`)
  - Worktree: Current Worktree (`.git/worktrees/<name>/config`)
 
### Git Notes
- tree: git's way of storing a directory
- blob: git's way of storing a file
- Fast forward merge (rebasing): When you merge a branch that is ahead of your current branch. Instead of merging, it just moves the branch pointer.
  - A---B
  - C---D
  - into
  - A---B
  -      \
  -       C---D
- Apparently you can nest the .gitignore

### Shortcuts

- `Ctrl+C`: Interrupt or cancel the current running command/process in the terminal.
- `Alt+Shift+=` open new pane to RIGHT
- `Alt+Shift+-` open new pane to DOWN
- `Shift+Ctrl+W` close current Pane
- `Tab`: Auto-complete forward
- `Shift+Tab`: Auto-complete backward
- `Up`: Previous executed command
- `Down`: Next executed command






## React Router Dom
- React-router-dom `<Link>` binds urls to react components removing the need for `<a>` tags which requires page reloads
- All children components inside `<Router>` can access routing info
- Routing context must wrap everything that needs navigation (eg. `<Navbar>` inside `App()`)

## React
- React is basically OOP with composition > inheritance
- Surround functions in `{() => {return someJSX}}` if you want to return JSX expressions
- Hooks
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
    - <table>
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

- `WheelEvent.deltaX` and `event.deltaY` is axis scrollSpeed per frame (scrollSpeed / 1 frame). 
- Mouse Events
  - `onMouseDown` → M1 pressed down.
  - `onMouseUp` → M1 released
  - `onMouseLeave` → Mouse leaves element boundaries
  - `onTouchStart` → Finger touch screen
  - `onTouchEnd` → Finger no longer touch screen 🦍
- 



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
  - `whileTap` animates a component when it's being tapped
  - `whileHover` animates a component when it's being hovered
  - `whileFocus` animates a component when it's being focused
  - `transition={{ type: 'spring', stiffness: 300, damping: 20 }}`
    - `type: 'spring'` animation type
    - `stiffness: 300` spring stiffness 
    - `damping: 20` spring dampening (similar to springjoint2d)
    - `duration: 0.3` duration
    - `ease: 'easeOut'` easing curve


# Tailwind shorthands for reference

## Colors and Text
- bg-blue-100 <!-- light version -->
- bg-blue-500 <!-- normal version -->
- bg-blue-900 <!-- dark version -->
- text-white <!-- white text -->

## Spacing and Layout
- p-4 <!-- padding 4 -->
- m-2 <!-- margin 2 -->
- h-screen <!-- height of screen -->
- w-screen <!-- width of screen -->
- min-w-[100vw] <!-- min width 100vw -->

## Flexbox
- flex <!-- flex container -->
- justify-center <!-- justify content center -->
- items-center <!-- align items center -->

## Visual Effects
- rounded-lg <!-- rounded corners -->
- shadow-md <!-- shadow medium -->
- overflow-hidden <!-- overflow hidden -->

## Positioning
- z-10 <!-- z-index 10 -->
- absolute <!-- absolute positioning -->
- relative <!-- relative positioning -->
- left-1/2 <!-- left 50% -->
- top-1/2 <!-- top 50% -->
- -translate-x-1/2 <!-- translate x -50% -->
- -translate-y-1/2 <!-- translate y -50% -->

## Interactions
- cursor-grab <!-- grab cursor -->
- active:cursor-grabbing <!-- grab cursor when active -->
- select-none <!-- prevents highlighting when dragging -->
- pointer-events-none <!-- prevents pointer events -->

## Transitions and Animations
- transition-transform <!-- transition transform --> 
- duration-75 <!-- duration 75ms -->
- ease-out <!-- ease out -->
- hover:scale-110 <!-- on hover: scale 110% -->


