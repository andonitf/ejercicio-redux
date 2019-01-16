import { actionsEnums } from "../common/actionsEnums";

export interface organizationState {
    organizationName: string;
}

const defaultOrganizationState = (): organizationState => ({
    organizationName: "lemoncode"
});

export const organizationReducer = (
    state: organizationState = defaultOrganizationState(),
    action
) => {
    switch (action.type) {
        case actionsEnums.ORGANIZATION_NAME_UPDATE:
            return handleOrganizatioAction(state, action.payload);
    }
    return state;
};

const handleOrganizatioAction = (
    state: organizationState,
    newOrganizationName: string
): organizationState => {
    return {
        ...state,
        organizationName: newOrganizationName
    };
};
