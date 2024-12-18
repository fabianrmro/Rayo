# RAYO ⚡️

![Rayo Image](https://media.tenor.com/xCelSHquwNUAAAAi/boing-flash.gif)

Get in a match!!. get close interaction between project and investors at the same location and interestin.

![match Image](https://media.tenor.com/r1zG9H_gXDkAAAAM/popoandcarrot-popocarrot.gif)

## Functional

It is a app-web where projects and investors can like each other. If both give each other a like, a match is made, and the chat option is enabled, allowing them to interact and potentially reach a deal.

## Use Cases

User
- ID (auto)
- Name (string)
- Surname (string)
- Username (string)
- Email (string)
- Phone Number (Number)
- Password (string)

- BIO (string) 
- Avatar (string)
- Role (string, enum: project / investor)

- Delete Profile
- Edit Profile
- Toggle Like User
- Toggle Match User
- Open chat
- Send messages
- Delete chats

### User.Project 

- Project Name (title)
- Categories (array string)
- Description (string)
- Budget (number)
- Star Date (date)
- End Date (date)

## User.Investor

- Project Name (title)
- Description (string)


### UIUX Design
[Figma](https://www.figma.com/design/qo9bSmKcNGI09Po46514dm/Untitled?node-id=0-1&node-type=canvas&t=hfqOwN5i0U5mXpVH-0)

## Technical

### Blocks

- App (user interface)
- API (core logic)
- DB (data storage)

### Packages

- api (server)
- cor (core logic dependency to api)
- com (common dependencies to api and app)
- app (client)
- doc (project documentation)

### Technologies

- HTML / CSS  / JS
- Node
- Express
- React
- React Router
- Mongodb
- Mongoose
- Bcrypt
- TailwindCSS
- JWT

### Data Model

USER
- ID (auto)
- Name (string)
- Surname (string)
- Email (string)
- Username (string)
- Password (string)
- Avatar (string)
- Role (string, enum: project / investor)
- Title (string)
- PhoneNumber (string)
- Image (string)
- Description (string)
- Category (string)
- StartDate (date)
- EndDate (date)
- BudgetGoal (number)
- Match ([User.id])
- Likes ([User.id])

CHAT
- id (auto)
- Participants ([User.id])
- Messages ([Message.id])
- Date (date)

Message 

- id (auto)
- Author (User.id)
- Message (string)
- Date (date)
- Chat (Chat.id)
