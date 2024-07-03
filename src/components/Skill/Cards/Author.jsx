import { useEffect, useRef } from "react";
import skillStyles from "../Skill.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import bookPreview from "../../../assets/book_preview.pdf";

function Author() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const controls = useAnimation();
  const leftInView = useInView(leftRef);
  const rightInView = useInView(rightRef);

  useEffect(() => {
    if (leftInView || rightInView) {
      controls.start("visible");
    }
  }, [controls, leftInView, rightInView]);

  const leftVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: -150 },
  };

  const rightVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: 150 },
  };

  return (
    <section className={skillStyles.author}>
      <motion.svg
        ref={rightRef}
        initial="hidden"
        animate={controls}
        variants={rightVariant}
        xmlns="http://www.w3.org/2000/svg"
        width="713.74209"
        height="454.87759"
        viewBox="0 0 713.74209 454.87759"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M151.45532,107.12088l26.99368,36.84888s23.01451,9.67771,49.9126,29.10911l-6.43865,10.05121s-44.39713-18.1797-55.75874-25.86109l-20.74693-32.52529,6.03804-17.62282Z"
          fill="#a0616a"
        />
        <ellipse
          cx="233.00689"
          cy="183.07086"
          rx="8.26737"
          ry="13.92399"
          transform="translate(-49.60553 272.16278) rotate(-55.65347)"
          fill="#a0616a"
        />
        <path
          d="M138.26109,75.6637l8.8339-2.50569s5.1422,.00984,8.04323,5.0606c2.90102,5.05075,23.44113,50.08457,22.46756,51.82912-.97357,1.74455-2.33263,2.13004-.58808,3.10361,1.74455,.97357,3.34184,.48004,2.15279,1.93885s.4542,4.66371,.4542,4.66371l-22.66043,16.71891-18.70316-80.80912Z"
          fill="#00ccff"
        />
        <polygon
          points="103.98781 445.96841 114.76512 445.96735 119.89195 404.39726 103.98562 404.39836 103.98781 445.96841"
          fill="#a0616a"
        />
        <path
          d="M140.9122,445.72392h0c.33555,.56513,.51263,2.38921,.51263,3.04645h0c0,2.02017-1.63767,3.65784-3.65783,3.65784h-33.37606c-1.37816,0-2.49539-1.11722-2.49539-2.49539v-1.38955s-1.6511-4.17631,1.74822-9.32386c0,0,4.22487,4.03063,10.5379-2.2824l1.86165-3.3725,13.47584,9.8555,7.46946,.91942c1.63414,.20115,3.08299-.03122,3.92358,1.38451Z"
          fill="#2f2e41"
        />
        <polygon
          points="142.99451 435.46553 153.62304 437.25011 165.5665 397.104 149.87984 394.46966 142.99451 435.46553"
          fill="#a0616a"
        />
        <path
          d="M179.44907,441.3422h0c.23728,.61292,.10969,2.44112,.0008,3.08928h0c-.33471,1.99225-2.22108,3.33595-4.21332,3.00124l-32.91477-5.52988c-1.35912-.22834-2.27579-1.51523-2.04745-2.87434l.23023-1.37035s-.93633-4.39215,3.26888-8.90534c0,0,3.49867,4.67491,10.77042-.5049l2.39469-3.01745,11.65669,11.95202,7.21389,2.14428c1.57823,.46912,3.04555,.48001,3.63996,2.01544Z"
          fill="#2f2e41"
        />
        <path
          d="M165.08713,222.1622s14.47992,16.9521,14.47992,32.49152,.35317,64.35457,.35317,64.35457c0,0-8.47605,76.20658-10.59506,82.56362-2.11901,6.35704-3.17852,16.9521-3.17852,16.9521l-20.48379-4.94436s-2.82535-71.69325,5.6507-88.64535l-20.48379-57.91967-7.06337,163.87029h-23.7791s-12.24411-86.17317-5.88707-108.77597c0,0-14.12675-86.17317-10.59506-91.11753,3.53169-4.94436,81.58197-8.82922,81.58197-8.82922Z"
          fill="#2f2e41"
        />
        <path
          d="M112.46499,53.34756l19.07111,1.41267,6.35704,10.59506s14.83309,6.35704,16.9521,15.53942c2.11901,9.18239,2.82535,116.54568,2.82535,116.54568l10.59506,15.53942-.70634,13.42041-84.76049,4.23802v-12.90317l-7.76971-15.35033s8.47605-122.90271,10.59506-123.60905c2.11901-.70634,18.36477-12.00774,18.36477-12.00774l8.47605-13.42041Z"
          fill="#00ccff"
        />
        <circle cx="121.09631" cy="26.70369" r="24.01547" fill="#a0616a" />
        <path
          d="M140.27905,7.38731c-1.22197-3.46578-4.61208-5.56839-8.28613-5.48649-.15581,.00343-.31131,.00199-.46542-.00434-1.85026-.07565-3.62619-.7076-5.44048-1.07833-3.38133-.69101-6.94664-.45966-10.21031,.66248-1.01445,.34882-2.03016,.78745-3.10291,.78757-1.07274,.00015-2.24124-.58808-2.50289-1.62838-.06211,.94187-.12405,1.88369-.18599,2.82551-.34916-.76229-.69815-1.52463-1.04731-2.28696l-.69907,3.04009-2.23975-2.54074c.20029,1.11987-.4526,2.24857-1.33659,2.96455-.88398,.71602-1.97579,1.11208-3.02239,1.55816-4.51696,1.92538-8.75815,5.33425-10.05965,10.06887-.82233,2.9913-.3922,6.16599,.04356,9.23746,.38511,2.71533,.80391,5.5245,2.27986,7.8359,.94613,1.48175,2.30989,2.72857,2.88596,4.38963,.53695,1.54823,.33356,3.32083,1.09757,4.77063,.76723,1.45622,2.35113,2.2801,3.9013,2.83338,1.55005,.55349,3.19792,.94488,4.53289,1.90776,1.33483,.96302,2.88417,3.73695,5.79264,3.58767l.93871-1.76355c.96568-.7868-2.60804-.16303-2.64533-1.40807-.03729-1.24504,4.29998-2.01425,3.6853-3.09766-.9427-1.6613-2.21811-3.10718-3.2804-4.69483-1.24232-1.8567-2.21931-4.02607-1.79064-6.29222,.16671-.88153,.57928-1.71424,1.2078-2.35458,1.81162-1.846,3.83164-1.03461,5.79476-.77056,1.35305,.18217,2.96907-.02813,3.67172-1.19882,.82186-1.36963-.0942-3.11199,.01786-4.70534,.11877-1.68834,1.39786-3.07277,2.78986-4.03532,1.39219-.96252,2.97284-1.66379,4.22515-2.80222,1.25228-1.13852,2.14439-2.91714,1.59842-4.51914,5.93621-2.47142,6.84497-2.70517,13.09608-1.19801-.29794-1.56322-.71506-3.10341-1.24416-4.60409Z"
          fill="#2f2e41"
        />
        <g>
          <path
            d="M38.89356,314.54275v-72.89503c0-1.99918,.85217-3.9129,2.33815-5.25046,1.48586-1.33732,3.47793-1.98449,5.46671-1.77477,18.4224-2.47839,35.77324-1.29965,51.49784,5.43013,1.78116,0,3.23023,1.44905,3.23023,3.23022v73.14985c0,1.78105-1.44907,3.23021-3.23023,3.23021-17.3092-4.05952-35.56576-3.00273-54.1827,0-2.82318,0-5.12-2.29684-5.12-5.12014Z"
            fill="#e6e6e6"
          />
          <path
            d="M38.89356,321.03206v-73.66565c0-3.89527,3.16898-7.06428,7.06426-7.06428,17.61624-4.60921,35.02939-4.61714,52.23845,0,1.78116,0,3.23023,1.44904,3.23023,3.2302v72.40112c0,1.77844-1.44478,3.22594-3.22228,3.23023-16.96848-2.95222-35.14513-.07702-54.19066,6.98829-2.82318,0-5.12-2.29685-5.12-5.11991Z"
            fill="#f2f2f2"
          />
          <path
            d="M79.57216,270.74461h-16.47266c-5.91602,0-10.729-4.8125-10.729-10.72852s4.81299-10.72949,10.729-10.72949h16.47266c5.9165,0,10.72949,4.81348,10.72949,10.72949s-4.81299,10.72852-10.72949,10.72852Z"
            fill="#e6e6e6"
          />
        </g>
        <path
          d="M94.66968,126.05669l-.62965,38.03222s-2.01241,29.63995-7.01004,62.99582l-11.91241,.75997s1.46567-52.08104,.9317-65.78524l.84241-30.43814,17.77798-5.56463Z"
          fill="#a0616a"
        />
        <ellipse
          cx="81.72612"
          cy="236.74328"
          rx="8.26737"
          ry="13.92399"
          transform="translate(-7.99527 2.91297) rotate(-1.94678)"
          fill="#a0616a"
        />
        <path
          d="M94.48458,77.63734l-9.1763,.3342s-4.88967,1.59169-6.09575,7.29007c-1.20608,5.69837-9.66037,64.67115-8.19721,66.03148,1.46315,1.36032,2.87489,1.30891,1.51457,2.77206-1.36032,1.46315-3.03198,1.48508-1.45172,2.50721,1.58026,1.02213,1.00293,4.57719,1.00293,4.57719l25.37952-1.79809-2.97604-81.71412Z"
          fill="#00ccff"
        />
        <path
          d="M699.91591,417.42821h-244.15186c-1.4165,0-2.81934-.2168-4.16943-.64355l-.14355-.05762c-76.44971-37.99414-141.99561-58.73047-200.38281-63.39551l-.22217-.04395c-5.77588-1.82715-9.65625-7.125-9.65625-13.18262V13.83836c0-4.45508,2.06152-8.52051,5.65527-11.15332,3.59424-2.63281,8.09131-3.37158,12.34082-2.0293l193.01172,61.05029c1.15576,.36572,2.35596,.55078,3.56641,.55078h244.15186c7.62402,0,13.82617,6.20264,13.82617,13.82617V403.60204c0,7.62402-6.20215,13.82617-13.82617,13.82617Zm-247.646-2.52734c1.13281,.34961,2.30811,.52734,3.49414,.52734h244.15186c6.521,0,11.82617-5.30469,11.82617-11.82617V76.08299c0-6.521-5.30518-11.82617-11.82617-11.82617h-244.15186c-1.41553,0-2.81787-.21631-4.16943-.64355L258.58242,2.56297c-3.63428-1.15039-7.48096-.5166-10.55518,1.73535-3.07422,2.25244-4.8374,5.72949-4.8374,9.54004V340.10496c0,5.14453,3.27148,9.64746,8.15381,11.24219,58.59863,4.70312,124.32568,25.49219,200.92627,63.55371Z"
          fill="#3f3d56"
        />
        <path
          d="M462.28362,402.61243c66.57014-23.55656,140.83585-20.85274,219.7317-2.349,9.90448,2.32293,19.40047-5.13488,19.40047-15.30812V86.84158c0-7.23933-4.93548-13.56904-11.9676-15.28866-83.22864-20.35257-160.96879-24.09712-229.47889,.08754-5.01901,1.77175-10.59015,.81182-14.82528-2.41205C387.41274,25.28221,328.32862,3.24799,267.48026,9.7905c-7.96013,.85589-13.96422,7.63971-13.96422,15.64572V326.80114c0,8.06918,6.10533,14.8162,14.13123,15.65093,65.49395,6.81166,125.67579,27.45575,181.64484,59.06964,3.963,2.23848,8.70074,2.60906,12.99152,1.09072Z"
          fill="#f2f2f2"
        />
        <path
          d="M460.14589,385.895c-4.53369,0-8.99902-1.24609-12.93408-3.68945-47.00439-29.19238-98.21484-46.24609-152.20752-50.6875-12.6582-1.04199-22.57422-11.83887-22.57422-24.58105V49.52196c0-13.21191,10.24609-24.0376,23.32666-24.64551,39.31055-1.83301,87.04199,15.69775,150.20508,55.15039,5.34277,3.33643,11.83984,4.32715,17.82617,2.72168,60.02832-16.11328,125.09814-16.58398,198.93164-1.43896,11.4624,2.35156,19.78223,12.52539,19.78223,24.19189v251.26074c0,7.58203-3.41016,14.625-9.35645,19.32129-5.99023,4.73145-13.69775,6.42773-21.14746,4.6543-69.8457-16.62402-129.82178-15.42285-183.35889,3.6748h0c-2.78027,.99219-5.65088,1.48242-8.49316,1.48242ZM301.36855,26.74754c-1.86084,0-3.69629,.04199-5.51904,.12695-12.01074,.55811-21.41943,10.50586-21.41943,22.64746V306.937c0,11.70898,9.10938,21.63086,20.73828,22.58691,54.31201,4.46875,105.82178,21.62109,153.09863,50.98242,5.88232,3.6543,13.06299,4.39062,19.7002,2.02344l.33594,.94141-.33594-.94141c53.91064-19.23242,114.25977-20.45508,184.49365-3.7373,6.85107,1.62988,13.9375,.07227,19.44482-4.27832,5.46289-4.31543,8.59619-10.78516,8.59619-17.75195V105.50145c0-10.72119-7.64746-20.07129-18.18457-22.23291-73.521-15.08203-138.29053-14.62012-198.01074,1.41162-6.52197,1.74902-13.59277,.67236-19.4043-2.95703-59.85791-37.38818-105.6958-54.97559-143.53369-54.97559Z"
          fill="#fff"
        />
        <rect
          x="454.99619"
          y="84.24502"
          width="2.00008"
          height="301.18961"
          transform="translate(-2.15024 4.22302) rotate(-.52937)"
          fill="#fff"
        />
        <rect
          x="360.62999"
          y="14.73326"
          width="1.99959"
          height="147.49977"
          transform="translate(164.02606 404.01148) rotate(-71.69155)"
          fill="#3f3d56"
        />
        <rect
          x="360.62999"
          y="51.80113"
          width="1.99959"
          height="147.49977"
          transform="translate(128.8346 429.43513) rotate(-71.69155)"
          fill="#3f3d56"
        />
        <rect
          x="360.62999"
          y="88.86851"
          width="1.99959"
          height="147.49977"
          transform="translate(93.6436 454.85844) rotate(-71.69155)"
          fill="#3f3d56"
        />
        <rect
          x="360.62999"
          y="125.93589"
          width="1.99959"
          height="147.49977"
          transform="translate(58.4526 480.28175) rotate(-71.69155)"
          fill="#3f3d56"
        />
        <rect
          x="489.30703"
          y="112.70995"
          width="167.8335"
          height="2"
          fill="#3f3d56"
        />
        <rect
          x="489.30703"
          y="147.71825"
          width="167.8335"
          height="2"
          fill="#3f3d56"
        />
        <rect
          x="489.30703"
          y="182.72606"
          width="167.8335"
          height="2"
          fill="#3f3d56"
        />
        <rect
          x="489.30703"
          y="217.73485"
          width="167.8335"
          height="2"
          fill="#3f3d56"
        />
        <rect
          x="489.30703"
          y="252.74266"
          width="167.8335"
          height="2"
          fill="#3f3d56"
        />
        <rect
          x="489.30703"
          y="287.75145"
          width="167.8335"
          height="2"
          fill="#3f3d56"
        />
        <path
          d="M54.25887,437.54464c-2.06592,.12937-3.20768-2.43737-1.64468-3.93333l.1555-.61819c-.02047-.04951-.04105-.09897-.06178-.14839-2.08924-4.9818-9.16992-4.94742-11.24139,.04177-1.83859,4.42817-4.17942,8.86389-4.75579,13.54594-.25838,2.0668-.14213,4.17236,.31648,6.20047-4.30807-9.41059-6.57515-19.68661-6.57515-30.02077,0-2.59652,.14213-5.19301,.43275-7.78295,.239-2.11854,.56839-4.2241,.99471-6.31034,2.30575-11.2772,7.29852-22.01825,14.50012-30.98962,3.46197-1.89248,6.34906-4.85065,8.09295-8.39652,.62649-1.27891,1.11739-2.65462,1.34991-4.05618-.39398,.05168-1.48556-5.94866-1.18841-6.3168-.54906-.83317-1.53178-1.24733-2.13144-2.06034-2.98232-4.04341-7.0912-3.33741-9.23621,2.15727-4.58224,2.31266-4.62659,6.14806-1.81495,9.83683,1.78878,2.34682,2.03456,5.52233,3.60408,8.03478-.16151,.20671-.32944,.40695-.4909,.61366-2.96106,3.79788-5.52208,7.88002-7.68104,12.16859,.61017-4.76621-.29067-10.50822-1.82641-14.20959-1.74819-4.21732-5.02491-7.76915-7.91045-11.41501-3.46601-4.37924-10.57337-2.46806-11.18401,3.08332-.00591,.05375-.01166,.10745-.01731,.1612,.4286,.24178,.84849,.49867,1.25864,.76992,2.33949,1.54723,1.53096,5.17386-1.24107,5.60174l-.06277,.00967c.15503,1.54366,.41984,3.07444,.80734,4.57937-3.70179,14.31579,4.29011,19.5299,15.70147,19.76412,.25191,.12916,.49738,.25832,.74929,.38109-1.15617,3.25525-2.07982,6.59447-2.76441,9.97891-.61359,2.99043-1.03991,6.01317-1.27885,9.04888-.29715,3.83006-.27129,7.67959,.05168,11.50323l-.01939-.13562c-.82024-4.21115-3.10671-8.14462-6.4266-10.87028-4.94561-4.06264-11.93282-5.55869-17.26826-8.82425-2.56833-1.57196-5.85945,.45945-5.41121,3.43708l.02182,.14261c.79443,.32289,1.56947,.69755,2.31871,1.11733,.4286,.24184,.84848,.49867,1.25864,.76992,2.33949,1.54729,1.53096,5.17392-1.24107,5.6018l-.06282,.00965c-.0452,.00646-.08397,.01295-.12911,.01944,1.36282,3.23581,3.26168,6.23922,5.63854,8.82922,2.31463,12.49713,12.25603,13.68282,22.89022,10.04354h.00648c1.16259,5.06378,2.86128,10.01127,5.0444,14.72621h18.02019c.06463-.20022,.12274-.40692,.18089-.60717-1.6664,.10341-3.34571,.00649-4.98629-.29702,1.33701-1.64059,2.67396-3.29409,4.01097-4.93462,.03229-.0323,.05816-.0646,.08397-.09689,.67817-.8396,1.36282-1.67283,2.04099-2.51246l.00036-.00102c.04245-2.57755-.26652-5.14662-.87876-7.63984l-.00057-.00035Z"
          fill="#f2f2f2"
        />
        <path
          d="M255.81023,453.68759c0,.66003-.53003,1.19-1.19006,1.19H1.33018c-.65997,0-1.19-.52997-1.19-1.19,0-.65997,.53003-1.19,1.19-1.19H254.62016c.66003,0,1.19006,.53003,1.19006,1.19Z"
          fill="#ccc"
        />
        <g>
          <circle cx="664.18984" cy="367.42821" r="23" fill="#00ccff" />
          <path
            d="M674.96059,366.56218l-14.27069-8.24048c-.66669-.38495-1.50006,.09619-1.50006,.86603v7.24048h-4.28082c-.55231,0-1,.44769-1,1,0,.55225,.44769,1,1,1h4.28082v7.24048c0,.76984,.83337,1.25092,1.50006,.86597l14.27069-8.24048c.66656-.38489,.66656-1.34705,0-1.73199Z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="M336.66835,302.59537c.8958-10.24959,5.15132-20.04124,11.96184-27.74667,6.63443-7.5062,15.70252-12.65525,25.48162-14.75293,5.45895-1.17098,11.11392-1.39948,16.64225-.61069,1.32338,.18882,1.2881,2.28999-.0493,2.09917-9.40895-1.34249-19.1338,.29777-27.58827,4.64234-8.66574,4.45315-15.60153,11.69619-19.88606,20.43025-2.45018,4.9947-3.97856,10.44586-4.46292,15.98783-.11725,1.3415-2.2171,1.30008-2.09917-.0493h0Z"
            fill="#fff"
          />
          <path
            d="M388.42593,251.05747l16.16239,7.97413c.58787,.29004,.68444,1.24748,.18494,1.66038l-15.30037,12.64762c-1.03554,.856-2.49312-.65649-1.44947-1.5192l15.30037-12.64762,.18494,1.66038-16.16239-7.97413c-1.21371-.59881-.12439-2.39558,1.0796-1.80156h0Z"
            fill="#fff"
          />
        </g>
      </motion.svg>
      <motion.div
        className={skillStyles.info}
        ref={leftRef}
        initial="hidden"
        animate={controls}
        variants={leftVariant}
      >
        <h2>English mastery</h2>
        <p>
          As an English expert who has authored a{" "}
          <a
            className={skillStyles.bookPreview}
            href={bookPreview}
            download="preview.pdf"
          >
            book
          </a>{" "}
          on Communication Skills, I ensure legible and grammatically correct
          English to craft engaging and professional content on websites. Also,
          this expertise together with my experience in communication has
          equipped me to interact effectively with my team and to convey ideas
          articulately in presentations.
        </p>
      </motion.div>
    </section>
  );
}

export { Author };
