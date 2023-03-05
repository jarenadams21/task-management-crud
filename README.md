# How to Use
    * In terminal within the root directory, 
        - npm i
        - npm start

# Design Choices
    * tsconfig has been updated, setting "noImplicitAny" to false to tell
        my application that there is an implicit "any" for the purposes of prop paramaters of the functional components

# Technologies
    * React
    * Typescript
    * React Icons
    * CSS
    * MaterialUI
    * Firebase
    * Moment JS


# Node Progression
## Setup
    * npx create-react-app . --template typescript

## Icons
    * npm install react-icons --save

## Material UI
    * npm config set legacy-peer-deps true
    * npm i
    * npm i @date-io/date-fns@1.x date-fns
    * npm install @material-ui/core
## Database
    * npm install --save firebase

## Moment JS
    * npm install moment --save

## Random Utilities

### Random Color
    * npm install randomcolor --save

# Random Hacks/Fixes
    * const [date, setDate] = React.useState<Date | null>(new Date());
        - Allowed useState usage with MaterialUI
    * React Icons logo instead of custom logo in local folder
    # heading, showButtons, setShowModal are hacked to be empty/false instead of default
        values being assumed in logic
