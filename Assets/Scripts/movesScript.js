


private var csTracker : UDPReceive ;

private var verifOnce : boolean  = true;
	public var PositionSpeed : float=0.001;

		public var RotationSpeed : float= 5;
		public var transformInput :GameObject ;
var Target :Transform;
   private var oriYaw : float;
	private var oriPitch: float;
	private var oriRoll: float;

    private var oriX: float;;
	private var oriY: float;
	private var oriZ: float;;

	private var oriRawYaw: float;
	private var oriRawPitch: float;
	private var oriRawRoll: float;
    private var oriRawX: float;;
	private var oriRawY: float;
	private var oriRawZ: float;
	
	private var startPos : Vector3 = Vector3.zero;


    public var X: float;
	public var Y: float;
	public var Z: float;


/*
    public var Yaw : float;
	public var Pitch: float;
	public var Roll: float;
    public var X: float;;
	public var Y: float;
	public var Z: float;;
	
	public var RawYaw: float;
	public var RawPitch: float;
	public var RawRoll: float;
    public var RawX: float;;
	public var RawY: float;
	public var RawZ: float;
*/

function Start () {
	csTracker = transformInput.GetComponent("UDPReceive");
	startPos = Target.position;
}


function Update () {

//Debug.Log(csTracker.z.GetType().ToString());

/* RaZ */
	if(verifOnce && csTracker.yaw !=0 )  {
		initVariables();
		verifOnce = false;

	} if (Input.GetKey ("up")) initVariables();
	
	
/* Update values */

	X = csTracker.xPos - oriX  ;
	
	
	if(Target)
		{
		
		Target.position =startPos + new Vector3(csTracker.xPos*PositionSpeed,csTracker.yPos*PositionSpeed,-csTracker.zPos*PositionSpeed);
		
		Target.rotation = Quaternion.Euler(-csTracker.pitch*RotationSpeed,-csTracker.yaw*RotationSpeed,csTracker.roll*RotationSpeed);
		}
	else return;
	
	
	
	
	
}























function initVariables() {
	
	   oriYaw = csTracker.yaw;
	 oriPitch= csTracker.pitch;
	 oriRoll= csTracker.roll;
	 
   	 oriX= csTracker.xPos;
	 oriY= csTracker.yPos;
	oriZ= csTracker.zPos;
		
	/*
	 oriRawYaw= csTracker.RawYaw;
	 oriRawPitch= csTracker.RawPitch;
	 oriRawRoll= csTracker.roll;
    oriRawX= csTracker.RawX;
	 oriRawY= csTracker.RawY;
	oriRawZ= csTracker.RawZ;
*/

}