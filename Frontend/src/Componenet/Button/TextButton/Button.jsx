import './Button.css'

 export default function TextButton({content,height,width,fontSize})
{
    return(
        <button className="custom-btn btn-2" style={{height:height,width:width,fontSize:fontSize}}>
           <label className='btn-con'>{content}</label></button>
    )
}