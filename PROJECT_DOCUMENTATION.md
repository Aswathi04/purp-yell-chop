# Dynamic Note Taker - Project Documentation

## Technical Details
### Technologies/Components Used
For Software:
- **Languages used**: TypeScript, JavaScript, HTML, CSS
- **Frameworks used**: React 18.3.1, Vite
- **Libraries used**: 
  - Tailwind CSS for styling
  - shadcn/ui component library
  - React Router DOM for navigation
  - Lucide React for icons
  - Supabase (available for backend features)
- **Tools used**: 
  - Vite for build tooling
  - ESLint for code linting
  - PostCSS for CSS processing

### Implementation
For Software:
# Installation
```bash
npm install
```

# Run
```bash
npm run dev
```

### Project Description
A therapeutic note-taking web application with a unique auto-deletion feature. Users can type their thoughts, and every 5 words, the first 2 words automatically disappear with a smooth animation. This creates a "stream of consciousness" experience that helps users express thoughts without worry about permanent record-keeping.

### Key Features
- **Dynamic Word Deletion**: Automatically removes first 2 words after every 5 words typed
- **Real-time Word Count**: Live display of current word count and deletion trigger point
- **Smooth Animations**: Visual feedback with fade-out animations for deleted words
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Purple & Yellow Theme**: Calming color palette designed for therapeutic writing

### Project Demo
# Video
[Add your demo video link here - showing the typing and auto-deletion feature in action]
*Demonstrates the core functionality of typing text and watching words automatically disappear every 5 words*

# Additional Demos
- Live typing demonstration showing word counter
- Animation showcase of word deletion effects
- Responsive design across different screen sizes

## Architecture
The application follows a clean React component architecture:
- `DynamicNoteTaker`: Core component handling text input and word deletion logic
- `Index`: Main page layout with hero section
- Design system built with Tailwind CSS custom tokens
- Modular UI components from shadcn/ui library

## Team Contributions
- **Frontend Development**: React component architecture, TypeScript implementation
- **UI/UX Design**: Purple and yellow theme design, responsive layout, animation effects
- **Logic Implementation**: Word counting algorithm, auto-deletion functionality
- **Styling & Animation**: Tailwind CSS custom design system, smooth word deletion animations