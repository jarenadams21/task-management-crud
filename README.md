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

# Random Hacks/Fixes
    * const [date, setDate] = React.useState<Date | null>(new Date());
        - Allowed useState usage with MaterialUI
    * React Icons logo instead of custom logo in local folder
    # heading, showButtons, setShowModal are hacked to be empty/false instead of default
        values being assumed in logic
