
# Netflix-gpt

- Create React App (create-react-app)
- Configure Tailwind css into our app
- Routing

- Built Header
- Created Sign In Form
- SignIn-SignUp toggle
- Form Validation (useRef Hook)
- Google Firebase (for backend)
    - Firebase Setup
    - Deploying our app to production
- User Authentication
- Pushing user object into our Redux store
    - Installing @reduxjs-toolkit and react-redux libraries
    - create our appStore
    - create userSlice
    - add userSlice to appStore
    - provide appStore to our app
    - update userSlice with user info
        - onAuthStateChanged
        - useNavigate() Hook
- signOut button
- Update user profile
    - display photo URL in the Heaeder once signedIn
- BugFix: If user is not logged In, redirect /browser to login page and viceversa
- Unsubscribing onAuthStatusUpdated on UnMounting
- constants file in utils
- Register TMDB API & create an app to get Access Token
- Get data from TMDB now playing movies list API
- Add movie data to our Redux store
- Create custom Hook to do the same (useNowPlayingMovies)
    - Fetch data from TMDB API
    - Update Store with the data
- Browse (planning)
    - MainBrowseContainer
        - VideoTitle
        - Video background
    - SecondaryBrowseContainer
        - Movie suggestion * n
            - Movie cards * n
- Video background
    - videos API from TMDB
    - getting trailer video & displaying on the website
    - Custom Hook (useMovieTrailer)
        - fetching trailer video
        - updating store with trailer video data
- Embed the youtube video and make it autoplay and mute
- Tailwind calsses to make MainBrowseContainer look awesome



# Features of our netflix-gpt
- Login-SignUp page
    - SignIn/SignUp form
    - Redirect to browse page
- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in the background
        - Movie Title & Description
        - Movie suggestions
            - Movie list (of diff categories)(Scroll horizontally)
- NetflixGPT
    - Search bar
    - Movie suggestions(Based on search input)