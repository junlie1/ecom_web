import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
    &.empty {
        justify-content: center;
        align-items: center;
        height: 200px;
        font-size: 16px;
        color: #888;
    }
`
export const WrapperSortFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`

export const WrapperPagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;

    button {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f9f9f9;
        color: #333;
        cursor: pointer;

        &:hover {
            background-color: #e0e0e0;
        }

        &.active {
            background-color: #9255FD;
            color: #fff;
            border-color: #9255FD;
        }

        &:disabled {
            background-color: #f1f1f1;
            color: #ccc;
            cursor: not-allowed;
        }
    }
`;

export const Dropdown = styled.select`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    font-size: 14px;
    color: #333;

    &:hover {
        border-color: #9255FD;
    }

    &:focus {
        outline: none;
        border-color: #9255FD;
        box-shadow: 0 0 4px rgba(146, 85, 253, 0.4);
    }
`;