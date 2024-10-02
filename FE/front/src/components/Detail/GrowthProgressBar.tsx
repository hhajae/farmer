import React from 'react';
import styles from '../../styles/Detail/GrowthProgressBar.module.css';

interface GrowthProgressBarProps {
  plantDegreeRatio: number;
  plantGrowthStep: number;
  threshold: {
    totalStep: number;
    step1: number;
    step2: number;
    step3: number | null;
  };
}

const GrowthProgressBar: React.FC<GrowthProgressBarProps> = ({ plantDegreeRatio, plantGrowthStep, threshold }) => {
  // 전체 진행률
  const progress = plantDegreeRatio;

  return (
    <div className={styles.growthProgressBarContainer}>

      {/* 화살표 표시 */}
      <div className={styles.arrow} style={{ left: `${progress}%` }}>
        <img src={require('../../assets/icons/Arrow.png')} alt="Arrow" />
      </div>

      {/* 프로그레스 바 */}
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>

      {/* Threshold 표시 (선으로 표시 - 아래로 이동) */}
      <div className={styles.thresholdMarkers}>
        <div className={styles.markerLine} style={{ left: `${(threshold.step1 / 100) * 100}%` }}>
          <div className={styles.verticalLine}></div>
          <span>2단계</span>
        </div>
        <div className={styles.markerLine} style={{ left: `${(threshold.step2 / 100) * 100}%` }}>
          <div className={styles.verticalLine}></div>
          <span>3단계</span>
        </div>
        {threshold.step3 && (
          <div className={styles.markerLine} style={{ left: `${(threshold.step3 / 100) * 100}%` }}>
            <div className={styles.verticalLine}></div>
            <span>4단계</span>
          </div>
        )}
      </div>

      {/* 현재 단계 / 총 단계 및 진행률을 가운데 정렬로 표시 */}
      <div className={styles.stageInfo}>
        {progress === 100 ? (
          <p>성장완료 (성장율: {progress}%)</p>
        ) : (
          <p>현재 : {plantGrowthStep}단계 / 전체 : {threshold.totalStep}단계 (성장율: {progress}%)</p>
        )}
      </div>
    </div>
  );
};

export default GrowthProgressBar;
