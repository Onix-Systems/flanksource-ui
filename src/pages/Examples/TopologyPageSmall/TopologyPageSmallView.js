import React from "react";
import PropTypes from "prop-types";

import { TopologyColumn, TopologyCard } from "../../../components/Topology";
import { TopologySelectorModal } from "../../../components/TopologySelectorModal/TopologySelectorModal";
import { textData } from "../../../data/topologyDatas";

export const TopologyPageSmallView = ({
  topology,
  checked,
  selectionMode,
  setSelectionMode,
  toggleChecked,
  modal,
  setModal
}) => (
  <div className="font-inter flex leading-1.21rel">
    <div className="flex-auto">
      <p className="text-2xl my-6">Title</p>
      <button
        type="button"
        className="py-3 px-6 bg-dark-blue rounded-6px text-white mb-4"
        onClick={() => {
          setModal(true);
        }}
      >
        Open Modal
      </button>

      <div className="form-check mb-4">
        <input
          id="ch1"
          type="checkbox"
          className="h-4 w-4 text-dark-blue rounded-4px"
          checked={selectionMode}
          onChange={(event) => {
            setSelectionMode(event.target.checked);
          }}
        />
        <label className="form-check-label inline-block ml-4" htmlFor="ch1">
          Selection Mode
        </label>
      </div>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(2, 224px)" }}
      >
        <div>
          <TopologyColumn
            title="zone 1"
            cards={topology.map((item, index) => (
              <TopologyCard
                size="small"
                key={item.id}
                topology={item}
                selectionMode={selectionMode}
                selected={!!checked[`column_1_card_${index}`]}
                onSelectionChange={(state) => {
                  toggleChecked(`column_1_card_${index}`, state);
                }}
              />
            ))}
          />
        </div>
        <div>
          <TopologyColumn
            title="zone 2"
            cards={topology.map((item, index) => (
              <TopologyCard
                size="small"
                key={item.id}
                topology={item}
                selectionMode={selectionMode}
                selected={!!checked[`column_2_card_${index}`]}
                onSelectionChange={(state) => {
                  toggleChecked(`column_2_card_${index}`, state);
                }}
              />
            ))}
          />
        </div>
        <div>
          <TopologyColumn
            title="zone 3"
            cards={topology.map((item, index) => (
              <TopologyCard
                size="small"
                key={item.id}
                topology={item}
                selectionMode={selectionMode}
                selected={!!checked[`column_3_card_${index}`]}
                onSelectionChange={(state) => {
                  toggleChecked(`column_3_card_${index}`, state);
                }}
              />
            ))}
          />
        </div>
        <div>
          <TopologyColumn
            title="zone 4"
            cards={topology.map((item, index) => (
              <TopologyCard
                size="small"
                key={item.id}
                topology={item}
                selectionMode={selectionMode}
                selected={!!checked[`column_4_card_${index}`]}
                onSelectionChange={(state) => {
                  toggleChecked(`column_4_card_${index}`, state);
                }}
              />
            ))}
          />
        </div>
        <div>
          <TopologyColumn
            title="zone 5"
            cards={topology.map((item, index) => (
              <TopologyCard
                size="small"
                key={item.id}
                topology={item}
                selectionMode={selectionMode}
                selected={!!checked[`column_5_card_${index}`]}
                onSelectionChange={(state) => {
                  toggleChecked(`column_5_card_${index}`, state);
                }}
              />
            ))}
          />
        </div>
      </div>
    </div>
    <TopologySelectorModal
      handleModalClose={() => setModal(false)}
      isOpen={modal}
      renderTitle={() => (
        <h1 className="text-2xl font-semibold mb mb-6">Add Card</h1>
      )}
      textData={textData}
      renderParagraph={() => (
        <div>
          {textData.map(({ text, id }) => (
            <p className="text-sm" key={id}>
              {text}
            </p>
          ))}
        </div>
      )}
      footerStyle="flex justify-end mt-7 align-baseline"
      footerText={() => (
        <p className="text-base font-medium mt-3">{`${
          Object.values(checked).filter((item) => item === true).length
        } cards selected`}</p>
      )}
      footerButton={() => (
        <button
          type="button"
          className="py-3 px-6 bg-dark-blue rounded-6px text-white ml-6"
          onClick={() => {}}
        >
          Add
        </button>
      )}
      renderCards={() => (
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(5, 224px)" }}
        >
          <div>
            <TopologyColumn
              title="zone 1"
              cards={topology.map(({ name, status, properties }, index) => (
                <TopologyCard
                  size="small"
                  key={name}
                  name={name}
                  status={status}
                  properties={properties}
                  selectionMode
                  selected={!!checked[`column_1_card_${index}`]}
                  onSelectionChange={(event) => {
                    toggleChecked(
                      `column_1_card_${index}`,
                      event.target.checked
                    );
                  }}
                />
              ))}
            />
          </div>
          <div>
            <TopologyColumn
              title="zone 2"
              cards={topology.map(({ name, status, properties }, index) => (
                <TopologyCard
                  size="small"
                  key={name}
                  name={name}
                  status={status}
                  properties={properties}
                  selectionMode
                  selected={!!checked[`column_2_card_${index}`]}
                  onSelectionChange={(event) => {
                    toggleChecked(
                      `column_2_card_${index}`,
                      event.target.checked
                    );
                  }}
                />
              ))}
            />
          </div>
          <div>
            <TopologyColumn
              title="zone 3"
              cards={topology.map(({ name, status, properties }, index) => (
                <TopologyCard
                  size="small"
                  key={name}
                  name={name}
                  status={status}
                  properties={properties}
                  selectionMode
                  selected={!!checked[`column_3_card_${index}`]}
                  onSelectionChange={(event) => {
                    toggleChecked(
                      `column_3_card_${index}`,
                      event.target.checked
                    );
                  }}
                />
              ))}
            />
          </div>
          <div>
            <TopologyColumn
              title="zone 4"
              cards={topology.map(({ name, status, properties }, index) => (
                <TopologyCard
                  size="small"
                  key={name}
                  name={name}
                  status={status}
                  properties={properties}
                  selectionMode
                  selected={!!checked[`column_4_card_${index}`]}
                  onSelectionChange={(event) => {
                    toggleChecked(
                      `column_4_card_${index}`,
                      event.target.checked
                    );
                  }}
                />
              ))}
            />
          </div>
          <div>
            <TopologyColumn
              title="zone 5"
              cards={topology.map(({ name, status, properties }, index) => (
                <TopologyCard
                  size="small"
                  key={name}
                  name={name}
                  status={status}
                  properties={properties}
                  selectionMode
                  selected={!!checked[`column_5_card_${index}`]}
                  onSelectionChange={(event) => {
                    toggleChecked(
                      `column_5_card_${index}`,
                      event.target.checked
                    );
                  }}
                />
              ))}
            />
          </div>
        </div>
      )}
    />
  </div>
);

TopologyPageSmallView.propTypes = {
  topology: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
