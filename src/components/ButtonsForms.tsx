import "./ButtonsForms.css";

     export const ButtonAcept = ({Title} : {Title: string}) => {
   
        return (
          <>
            <button className='sendButton' type='submit'>{Title}</button>
          </>
        )
      }

       export const ButtonCancel = ({Title, Event} : {Title: string, Event: () => void}) => {
        return (
          <>
            <button className='cancelButton' type='button' onClick={Event}>{Title}</button>
          </>
        )
      }
  

  