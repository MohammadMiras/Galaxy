
import AssessmentIcon from '@mui/icons-material/Assessment';
export default function Menu({ open, setOpen }) {
  const items = [1,2,3,4,5]
  return <>
    <div className="flex flex-col  items-center bg-Template-color1 w-64 py-5">
      <div className="flex flex-col items-center gap-2">
        <img src="https://mui.com/static/images/avatar/1.jpg"
        className="w-10 h-10 rounded-full"
        />
        <p className="text-white">MOhammad</p>
      </div>
      <ul className="flex flex-col items-start gap-2 w-full px-2 pt-5">

       {
        items?.map(item=><>
        <li className={`flex gap-2 w-full p-2 text-Template-color2 rounded-lg ${item == 1 && "bg-[#252e3e] text-white"}`}>
          <AssessmentIcon className={`${item == 1 && "text-Template-color3"}`}/>
          <spnn>
            home 
          </spnn>
        </li>
        </>)
       }
      </ul>
    </div>
  </>
}
