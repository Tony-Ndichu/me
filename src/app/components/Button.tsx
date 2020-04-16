import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import greenArrow from './assets/pressGreen.png';
import styled from 'styled-components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      margin: '0 auto',
    },
  })
);

interface Iprops {
  label: string;
}

const ButtonStyled: React.FC<Iprops> = (props) => {
  const classes = useStyles();
  const { label } = props;

  return (
    <Container>
      <Button variant="contained" className={classes.button} color="secondary">
        {label}
      </Button>
      {/* <Arrow bgImage={greenArrow} /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
`;

// const Arrow = styled.div<{ bgImage: string }>`
//   width: 100px;
//   height: 100px;
//   background-image: url(${(props) => props.bgImage});
//   background-repeat: repeat;
//   background-size: cover;
// `;

export default ButtonStyled;
