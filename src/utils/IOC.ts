type ProviderConfig<TInterface> = {
  provide: symbol | string;
  useClass: new (...args: any[]) => TInterface;
};

export default function IOC<TInterface>(
  token: symbol | string,
  dependency: new (...args: any[]) => TInterface
): ProviderConfig<TInterface> {
  return {
    provide: token,
    useClass: dependency,
  };
}
