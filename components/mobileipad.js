import Back from '../components/ipadBack';
import Front from '../components/ipadFront';

export default function Mobileipad() {

  return (
      <>
        <div style={{ transform: 'scale(2.5)' }}>
            <div style={{ transform: 'translate(-80px, 800px)' }}>
                <Back />
            </div>
            <div style={{ transform: 'translate(220px, -150px)' }}>
                <Front />
            </div>
        </div>
      </>
    );
}
