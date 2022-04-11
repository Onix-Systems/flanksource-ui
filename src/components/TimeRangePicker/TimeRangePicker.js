import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiClock } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";
import dayjs from "dayjs";
import { TimeRangePickerBody } from "./TimeRangePickerBody";
import "./index.css";
import { convertRangeValue, createDisplayValue } from "./helpers";

export const TimeRangePicker = ({ onChange, from, to }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [currentRange, setCurrentRange] = useState({ from, to });
  const [pickerLeft, setPickerLeft] = useState(0);
  const pickerRef = useRef();

  const updateDisplayValue = useMemo(
    () => createDisplayValue(currentRange),
    [currentRange]
  );

  useEffect(() => {
    const pickerPosLeft = pickerRef.current.getBoundingClientRect().left;
    setPickerLeft(pickerPosLeft);
  }, []);

  const changeRangeValue = useCallback(
    (range) => {
      const { from, to } = range;
      setCurrentRange({ from, to });
      onChange(
        convertRangeValue(from, "jsDate"),
        convertRangeValue(to, "jsDate")
      );
    },
    [onChange]
  );

  useEffect(() => {
    const { from, to } = currentRange;
    onChange(
      convertRangeValue(from, "jsDate"),
      convertRangeValue(to, "jsDate")
    );
  }, []);

  return (
    <div className="relative text-sm time-picker-main">
      <button
        ref={pickerRef}
        type="button"
        className="time-range-picker-widget flex items-center justify-center px-2 py-1 bg-gray-50 cursor-pointer rounded-sm border border-gray-300"
        onClick={() => setIsPickerOpen((prevState) => !prevState)}
      >
        <div>
          <FiClock />
        </div>
        <div className="ml-2 font-medium">
          Time range: <span>{updateDisplayValue}</span>
        </div>
        <div
          className={clsx("timepicker-arrow-indicator ml-2", {
            active: isPickerOpen
          })}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </button>
      <TimeRangePickerBody
        pickerLeft={pickerLeft}
        isOpen={isPickerOpen}
        closePicker={() => setIsPickerOpen(false)}
        currentRange={currentRange}
        changeRangeValue={changeRangeValue}
      />
    </div>
  );
};

TimeRangePicker.propTypes = {
  onChange: PropTypes.func,
  from: PropTypes.shape({}),
  to: PropTypes.shape({})
};

TimeRangePicker.defaultProps = {
  onChange: (from, to) => {
    console.log("FROM: ", from, "\n", "TO: ", to);
  },
  from: dayjs(new Date()).subtract(1, "h"),
  to: new Date()
};
