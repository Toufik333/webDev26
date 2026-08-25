# Context

`createContext` defines a shared value and `useContext` reads the closest provider value. `ThemeButton` receives the theme without the parent passing it through every intermediate component.

Use context for genuinely shared, relatively stable values. Local component state is simpler for local concerns, and a state library may be a better fit when many unrelated updates need coordination. Keep the provider near the part of the tree that needs it.
