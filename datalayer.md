# Pirate Haven

## Data layer

### Data

- Collection of pirates
  - pirate:
    name:  string,
    bounty:number
    hasDevilFruit: boolean
    isAlive: boolean,
    imgUrl:string
    crew: string
    position:string

### Modifications

- addPirate(pirate)
- removePirate(id)
- loadPrates(api)
- editPirate()
- filterPirates()
- loginUser()
- logoutUser()
- provideFeedback()
- showLoader()
- hideLoader()
- openModal()
- closeModal()


## Custom Hooks

- usePirates() – Including getPirates(),getPirateById() addPirate(), updatePirate(), removePirate()
- useUser() – Including loginUser()
- useToken() - getDataToken()
- useLocalStorage() - setToken() , getToken() , removeToken()


## Components

- Collection of pirates

#### piratesReducer

- addPirate(pirate)
- removePirate(id)
- loadPrates(api)
- editPirate()
- filterPirates()
- loginUser()
- logoutUser()
- provideFeedback()
- showLoader()
- hideLoader()
- openModal()
- closeModal()


### App

- Receives dispatch()
- Check if there is token in localStorage with getToken() action
- If a token exist navigate to PirateList Page else navigate to Login page
- Renders a Layout component

### Navbar

- Shows a navbar with create, pirates , login/logout button

### Header

- Renders NavBar Component
- Shows a logo

### LoginForm

- Shows an input text for the username of the pirate
- Shows an input text for the password of the pirate
- Renders a Button component
  - text: "Login"
  - actionOnClick: handleSubmit

### PirateForm

- State:
  - pirates
- handleSubmit()
- Receives dispatch()
- Receives a pirate to update
- Shows an input text for the name of the pirate
- Shows an input text for the bounty of the pirate
- Shows an input text for the hasDevilFruit boolean of the pirate
- Shows an input text for the isAlive boolean of the pirate
- Shows an input text for the image of the pirate
- Shows an input text for the crew of the pirate
- Shows an input text for the position of the pirate
- Shows an input text for the dream of the pirate
- Renders a Button component
  - text: "create" / "edit"
  - actionOnClick: handleSubmit

### PiratesList

- Receives a collection of pirates
- Renders as many PirateCard as robots are in the collection
- 

### PirateCard

- Receives a pirate
- Receives dispatch()
- handleClick()
- Shows the pirate's name and bounty inside a header
- Shows deleteButton
- Shows editButton

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

### Feedback

- Renders the model with positive or negative feedback

### Pages

## LoginPage

-Renders LoginForm
-Receives a dispatch

## PiratesPage

- Receives dispatch
- call getPirates() from usePirates custom hook and dispatch loadRoutesActionCreator()
- Receives a collection of pirates
- Render pirateList

## DetailsPage

- Show edit button
- Call getPirateById from usePirates custoom hook
- Shows name, image, bounty, hasDiableFruit, isAlive, image, crew, position and dream

## CreateFormPage

- Renders pirateForm component
- Receives dispatch

## EditFormPage

- Renders pirateForm component
- Receives dispatch
