// Material-UI uses the JavaScript-based approach to theming its components called CSS-in-JS. With the help of this approach, CSS classnames are generated using JavaScript objects. 

//To pass the styles object into our component, we will use the withStyles function to return the higher-order component that gives our classnames as a prop called classes.

const MyComponent = (props) => {
    const classes = props.classes;
    return (
      <div className={classes.container}>
        // stuff
      </div>
    );
  }
  
  export default withStyles(styles)(MyComponent);